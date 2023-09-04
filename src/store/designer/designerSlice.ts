import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localStorageService } from "@/services/storage";
import { useDispatch } from "react-redux";
import { Designer } from "@/services/api/inteface/designer.interface";
import { ApiService } from "@/services/api/http";
export interface DesignerState {
      designer: Designer
      token: string
      is_login: boolean

};


let initialState: DesignerState = {
      designer: Designer.createObj(),
      token: localStorageService.getToken(),
      is_login: localStorageService.is_login
}

const designerSlice = createSlice({
      name: 'designer',
      initialState,
      reducers: {
            loginInit(state, action: PayloadAction<Designer, string>) {

                  state.is_login = true
                  state.designer = action.payload
            },

            loginExpire(state) {
                  state.is_login = false
            },

            fetchDataDesigner(state, action: PayloadAction<Designer, string>) {
                  state.designer = action.payload
            },


            login(state, action: PayloadAction<{ token: string, user: Designer }, string>) {
                  localStorageService.setToken(action.payload.token)
                  state.is_login = true
                  state.token = action.payload.token
                  state.designer = action.payload.user
            }

      },



})

// action
export const designerAction = designerSlice.actions;
//select

const designerReducer = designerSlice.reducer;
export default designerReducer;

