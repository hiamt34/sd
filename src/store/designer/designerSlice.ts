import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { localStorageService } from "@/services/storage";
import { useDispatch } from "react-redux";
import { Designer } from "@/services/api/inteface/designer.interface";
import { ApiService } from "@/services/api/http";
import Config from "@/config";
import { Category } from "@/services/api/inteface/category.interface";
import { Product } from "@/services/api/inteface/product.inteface";
export interface DesignerState {
      designer: Designer
      token: string
      is_login: boolean
      loading_app: boolean
      categories: Array<string>
      phone: string
      productHasBeenSide: Array<Product>
      productWaitingForSide: Array<Product>
      productAll: Array<Product>
};


let initialState: DesignerState = {
      designer: Designer.createObj(),
      token: localStorageService.getToken(),
      is_login: localStorageService.is_login,
      loading_app: true,
      categories: [],
      phone: localStorageService.phone,
      productHasBeenSide: [],
      productWaitingForSide: [],
      productAll: []
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

            loginInit(state, action: PayloadAction<{ designer: Designer | undefined, categories: Array<string> | undefined, product: Array<Product> | undefined }, string>) {

                  if (action.payload?.designer) {
                        state.is_login = true
                        state.designer = action.payload.designer
                  }
                  if (action.payload?.categories) {
                        state.categories = action.payload.categories
                  }
                  if (action.payload?.product) {
                        state.productAll = action.payload.product
                        state.productHasBeenSide = action.payload.product.filter((x) => x.status === "SUCCESS")
                        state.productWaitingForSide = action.payload.product.filter((x) => x.status === "PENDING")
                  }




            },

            loginExpire(state) {
                  state.is_login = false
            },


            login(state, action: PayloadAction<{ token: string, user: Designer }, string>) {
                  localStorageService.setStorage(action.payload.token, action.payload.user.id)
            }

      },



})

// action
export const designerAction = designerSlice.actions;
//select

const designerReducer = designerSlice.reducer;
export default designerReducer;

