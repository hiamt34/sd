import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Designer } from "@/api/inteface/designer.interface";
import { localStorageService } from "@/services/storage";
import { useDispatch } from "react-redux";
export interface DesignerState {
      designer: Designer
      token: string
      is_login: boolean

};


let initialState: DesignerState = {
      designer: Designer.createObj(),
      token: localStorageService.getToken(),
      is_login: false
}

const designerSlice = createSlice({
      name: 'designer',
      initialState,
      reducers: {

            initApp(state, action: PayloadAction<any, string>) {

                  if (localStorageService.getToken() !== "") {
                        state.is_login = true
                  }

            },

            fetchDataDesigner(state, action: PayloadAction<Designer, string>) {
                  state.designer = action.payload
            },


            login(state, action: PayloadAction<string, string>) {
                  localStorageService.setToken(action.payload)
                  state.is_login = true
                  state.token = action.payload
            }

      },

})

// action
export const designerAction = designerSlice.actions;
//select
const designerReducer = designerSlice.reducer;
export default designerReducer;