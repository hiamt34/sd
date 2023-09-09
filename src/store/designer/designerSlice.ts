import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localStorageService } from "@/services/storage";
import { useDispatch } from "react-redux";
import { Designer } from "@/services/api/inteface/designer.interface";
import { ApiService } from "@/services/api/http";
import Config from "@/config";
export interface DesignerState {
      designer: Designer
      token: string
      is_login: boolean
      loading_app: boolean

};


let initialState: DesignerState = {
      designer: Designer.createObj(),
      token: localStorageService.getToken(),
      is_login: localStorageService.is_login,
      loading_app: true
}

const designerSlice = createSlice({
      name: 'designer',
      initialState,
      reducers: {
            loadingApp(state) {
                  state.loading_app = false
            },

            loginInit(state, action: PayloadAction<Designer, string>) {
                  console.log('action', action.payload);

                  state.is_login = true
                  state.designer = action.payload
                  state.designer.photo = `${Config.apiDomain}${action.payload.photo !== null ? action.payload.photo : action.payload.photo_avatar_default}`
                  state.designer.banner = `${Config.apiDomain}${action.payload.banner !== null ? action.payload.banner : action.payload.photo_banner_default}`
                  state.designer.money = 1000000
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
                  state.designer.photo = `${Config.apiDomain}${action.payload.user.photo !== null ? action.payload.user.photo : action.payload.user.photo_avatar_default}`
                  state.designer.banner = `${Config.apiDomain}${action.payload.user.banner !== null ? action.payload.user.banner : action.payload.user.photo_banner_default}`
            }

      },



})

// action
export const designerAction = designerSlice.actions;
//select

const designerReducer = designerSlice.reducer;
export default designerReducer;

