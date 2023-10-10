import Axios, { AxiosResponse } from "axios";
import { ConfirmEmailDto, Designer, ForgotPassword, LoginDto, RegisterDto, UpdateDesignerDto } from "./inteface/designer.interface";
import Config from "@/config";
import { FileUpload } from "./inteface/upload_file";
import { Category } from "./inteface/category.interface";
import { CreateProductDto, GetProductDto, Product } from "./inteface/product.inteface";
import { CreateProductDetailDto, ProductDetail } from "./inteface/product_detail.interface";
import { Bank } from "./inteface/bank.interface";
import { CreateTransactionDto } from "./inteface/transaction.interface";
import { GetTranSactionDto, Transaction } from "./inteface/transation.interface";
import { CreateOrderDto } from "./inteface/order.interface.dto";
import { Bill } from "./inteface/order.interface";
Axios.defaults.baseURL = Config.apiDomain
Axios.defaults.headers.common["Content-Type"] = "multipart/form-data"
Axios.interceptors.response.use(
      (value) => {
            console.log(`API ${value.config.url} done with data:`, value.data);
            return value
      },
      (err) => {
            console.warn(`API error`, err.response)
            return err.response
      }
      //todo: Hiện toast err
)

export class ApiService {
      static setAuthorization = (token: string) => { Axios.defaults.headers.common.Authorization = `Bearer ${token}` }

      static getOneProductDesign = (_id: string): Promise<AxiosResponse> => Axios.get(Url.getOneProductDesign(_id))

      static login = (data: LoginDto): Promise<AxiosResponse<{ status: string, payload: { token: string, user: Designer }, errors?: any }>> => Axios.post(Url.loginDesign, data)
      static register = (data: RegisterDto): Promise<AxiosResponse> => Axios.post(Url.registerDesign, data)
      static confirmEmail = (data: ConfirmEmailDto): Promise<AxiosResponse> => Axios.post(Url.confirmEmail, data)
      static forgotPassword = (data: ForgotPassword): Promise<AxiosResponse> => Axios.post(Url.forgotPassword, data)
      static updateDesigner = (data: UpdateDesignerDto): Promise<AxiosResponse<{ payload: Designer, status: number, errors: Array<string> }>> => Axios.patch(Url.updateDesigner, data)

      static getDesigner = (): Promise<AxiosResponse<{ payload: Designer, status: number, errors: Array<string> }>> => Axios.get(Url.getDesign)


      static getListDesigner = (data: GetProductDto): Promise<AxiosResponse<{ payload: { data: Array<Designer>, meta: { page: number, pageSize: number, totalItem: number, totalPage: number } }, status: number, errors: Array<string> }>> => Axios.get(Url.getListDesigner(data))

      static uploadFile = (data: any): Promise<AxiosResponse<{ payload: FileUpload, status: number, errors: Array<string> }>> => Axios.post(Url.uploadFile, data, { headers: { ...Axios.defaults.headers.common } })

      static getCategory = (): Promise<AxiosResponse<{ payload: Array<Category>, status: number, errors: Array<string> }>> => Axios.get(Url.getCategory)


      static createProductDetail = (data: CreateProductDetailDto): Promise<AxiosResponse<{ payload: ProductDetail, status: number, errors: Array<string> }>> => Axios.post(Url.createProductDetail, data)
      static createProduct = (data: CreateProductDto): Promise<AxiosResponse<{ payload: Product, status: number, errors: Array<string> }>> => Axios.post(Url.createProduct, data)
      static getProduct = (data: GetProductDto): Promise<AxiosResponse<{ payload: { data: Array<Product>, meta: { page: number, pageSize: number, totalItem: number, totalPage: number } }, status: number, errors: Array<string> }>> => Axios.get(Url.getProduct(data))

      static getBanks = (): Promise<AxiosResponse<{ payload: Array<Bank>, status: number, errors: Array<string> }>> => Axios.get(Url.getBanks)

      static createTransation = (data: CreateTransactionDto): Promise<AxiosResponse<{ payload: Transaction, status: number, errors: Array<string> }>> => Axios.post(Url.createTranSaction, data)
      static getTransactions = (data: GetTranSactionDto): Promise<AxiosResponse<{ payload: { data: Array<Transaction>, meta: { page: number, pageSize: number, totalItem: number, totalPage: number } }, status: number, errors: Array<string> }>> => Axios.get(Url.getTranSaction(data))

      static getProvices = (): Promise<AxiosResponse<{ payload: Array<{ id: number, name: string }>, status: number, errors?: any }>> => Axios.get(Url.getProvinces)
      static getDistricts = (id: number): Promise<AxiosResponse<{ payload: Array<{ id: number, name: string, province_id: number }>, status: number, errors?: any }>> => Axios.get(Url.getDistricts(id))
      static getWards = (id: number): Promise<AxiosResponse<{ payload: Array<{ id: number, name: string, district_id: number }>, status: number, errors?: any }>> => Axios.get(Url.getWards(id))

      static createOrder = (data: CreateOrderDto): Promise<AxiosResponse<{ payload: Array<{ id: number, name: string, district_id: number }>, status: number, errors?: any }>> => Axios.post(Url.CreateOrder, data)

      static getOrder = (phone: string): Promise<AxiosResponse<{ payload: { data: Array<Bill> }, status: number, errors?: any }>> => Axios.get(Url.getOrder(phone))
}


export class Url {
      public static getOneProductDesign = (id: string): string => `designs/items/${id}`

      public static forgotPassword = 'api/v1/auth/forgot/password'
      public static registerDesign = "api/v1/auth/email/register"
      public static loginDesign = "api/v1/auth/email/login"
      public static confirmEmail = "api/v1/auth/email/confirm"
      public static getDesign = "api/v1/auth/me"
      public static updateDesigner = "api/v1/auth/me"

      public static uploadFile = '/api/v1/files/upload'

      public static getCategory = 'api/categorys/all-no-paginate'

      public static createProduct = '/api/products'
      public static createProductDetail = '/api/products/product-detail'
      public static getProduct = (data: GetProductDto): string => `api/products?page=${data.page}&pageSize=${data.pageSize}${data?.filter ? `&filter=${data.filter.join(',')}` : ""}${data?.sort ? `&sort=${data.sort}` : ''}${data?.search ? `${data.search.map((x) => `&search=${x}`).join(',')}` : ''}`

      public static getBanks = 'api/banks'

      public static createTranSaction = 'api/transactions/cashout'
      public static getTranSaction = (data: GetTranSactionDto): string => `api/transactions?page=${data.page}&pageSize=${data.pageSize}${data?.filter ? `&filter=${data.filter.join(',')}` : ""}${data?.sort ? `&sort=${data.sort}` : ''}${data?.dateFrom ? `&dateFrom=${data.dateFrom}` : ""}${data?.dateTo ? `&dateTo=${data.dateTo}` : ""}`

      public static getProvinces = 'api/provinces'
      public static getDistricts = (id: number) => `api/districts/${id}`
      public static getWards = (id: number) => `api/wards/${id}`


      public static CreateOrder = 'api/bills/checkout'

      public static getOrder = (phone: string) => `api/bills?filter=phone=${phone}`

      public static getListDesigner = (data: GetProductDto): string => `api/v1/users?page=${data.page}&pageSize=${data.pageSize}${data?.filter ? `&filter=${data.filter.join(',')}` : ""}${data?.sort ? `&sort=${data.sort}` : ''}${data?.search ? `${data.search.map((x) => `&search=${x}`).join(',')}` : ''}`

}
