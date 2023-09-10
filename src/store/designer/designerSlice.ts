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
                  state.designer = {
                        ...state.designer,
                        ...action.payload
                  }

                  if (action.payload.photo !== null) {
                        state.designer.photo.path = `${Config.apiDomain}${action.payload.photo.path}`

                  } else {
                        state.designer.photo = {
                              id: "",
                              path: `${Config.apiDomain}/${action.payload.photo_avatar_default}`,
                              createdAt: "",
                              user_id: action.payload.id
                        }
                  }
                  if (action.payload.banner !== null) {
                        state.designer.banner.path = `${Config.apiDomain}${action.payload.banner.path}`
                  } else {
                        state.designer.banner = {
                              id: "",
                              path: `${Config.apiDomain}${action.payload.photo_banner_default}`,
                              createdAt: "",
                              user_id: action.payload.id
                        }
                  }
                  console.log('Khởi tạo app', state.designer);



            },

            loginExpire(state) {
                  state.is_login = false
            },


            login(state, action: PayloadAction<{ token: string, user: Designer }, string>) {
                  localStorageService.setToken(action.payload.token)
                  state.is_login = true
                  state.token = action.payload.token
                  state.designer = action.payload.user
                  if (action.payload.user.photo !== null) {
                        state.designer.photo.path = `${Config.apiDomain}${action.payload.user.photo.path}`

                  } else {
                        state.designer.photo = {
                              id: "",
                              path: `${Config.apiDomain}${action.payload.user.photo_avatar_default}`,
                              createdAt: "",
                              user_id: action.payload.user.id
                        }
                  }
                  if (action.payload.user.banner !== null) {
                        state.designer.banner.path = `${Config.apiDomain}${action.payload.user.banner.path}`
                  } else {
                        state.designer.banner = {
                              id: "",
                              path: `${Config.apiDomain}${action.payload.user.photo_banner_default}`,
                              createdAt: "",
                              user_id: action.payload.user.id
                        }
                  }
                  console.log("App state after login", state.designer);

            }

      },



})

// action
export const designerAction = designerSlice.actions;
//select

const designerReducer = designerSlice.reducer;
export default designerReducer;

