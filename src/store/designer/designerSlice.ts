import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localStorageService } from "@/services/storage";
import { useDispatch } from "react-redux";
import { Designer } from "@/services/api/inteface/designer.interface";
import { ApiService } from "@/services/api/http";
import Config from "@/config";
import { Category } from "@/services/api/inteface/category.interface";
export interface DesignerState {
      designer: Designer
      token: string
      is_login: boolean
      loading_app: boolean
      categories: Array<string>
      phone: string
};


let initialState: DesignerState = {
      designer: Designer.createObj(),
      token: localStorageService.getToken(),
      is_login: localStorageService.is_login,
      loading_app: true,
      categories: [],
      phone: localStorageService.phone
}

const designerSlice = createSlice({
      name: 'designer',
      initialState,
      reducers: {
            loadingApp(state) {
                  state.loading_app = false
            },

            setPhoneNumber(state, action: PayloadAction<{ phone: string }, string>) {
                  state.phone = action.payload.phone
                  localStorageService.setPhoneNumber(action.payload.phone)
            },

            loginInit(state, action: PayloadAction<{ designer: Designer | undefined, categories: Array<string> | undefined }, string>) {
                  if (action.payload?.designer) {
                        state.is_login = true
                        state.designer = {
                              ...state.designer,
                              ...action.payload.designer
                        }

                        if (action.payload.designer.photo !== null) {
                              state.designer.photo.path = `${Config.apiDomain}${action.payload.designer.photo.path}`

                        } else {
                              state.designer.photo = {
                                    id: "",
                                    path: `${Config.apiDomain}/${action.payload.designer.photo_avatar_default}`,
                                    createdAt: "",
                                    user_id: action.payload.designer.id
                              }
                        }
                        if (action.payload.designer.banner !== null) {
                              state.designer.banner.path = `${Config.apiDomain}${action.payload.designer.banner.path}`
                        } else {
                              state.designer.banner = {
                                    id: "",
                                    path: `${Config.apiDomain}${action.payload.designer.photo_banner_default}`,
                                    createdAt: "",
                                    user_id: action.payload.designer.id
                              }
                        }
                        console.log('Khởi tạo app', state.designer);
                        return
                  }
                  if (action.payload?.categories) {
                        state.categories = action.payload.categories
                  }




            },

            loginExpire(state) {
                  state.is_login = false
            },


            login(state, action: PayloadAction<{ token: string, user: Designer }, string>) {
                  localStorageService.setStorage(action.payload.token, action.payload.user.id)
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
            }

      },



})

// action
export const designerAction = designerSlice.actions;
//select

const designerReducer = designerSlice.reducer;
export default designerReducer;

