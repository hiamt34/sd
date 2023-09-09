import Axios, { AxiosResponse } from "axios";
import { ConfirmEmailDto, Designer, ForgotPassword, LoginDto, RegisterDto, UpdateDesignerDto } from "./inteface/designer.interface";
import Config from "@/config";
Axios.defaults.baseURL = Config.apiDomain
Axios.defaults.headers.common["Content-Type"] = "multipart/form-data"
Axios.interceptors.response.use(
      (value) => value,
      (err) => err.response
      //todo: Hiện toast err
)

export class ApiService {
      static setAuthorization = (token: string) => { Axios.defaults.headers.common.Authorization = `Bearer ${token}` }

      static getOneProductDesign = (_id: string): Promise<Designer> => Axios.get(Url.getOneProductDesign(_id))

      static login = (data: LoginDto): Promise<AxiosResponse<{ status: string, payload: { token: string, user: Designer }, errors?: any }>> => Axios.post(Url.loginDesign, data)
      static register = (data: RegisterDto): Promise<AxiosResponse> => Axios.post(Url.registerDesign, data)
      static confirmEmail = (data: ConfirmEmailDto): Promise<AxiosResponse> => Axios.post(Url.confirmEmail, data)
      static forgotPassword = (data: ForgotPassword): Promise<AxiosResponse> => Axios.post(Url.forgotPassword, data)
      static updateDesigner = (data: UpdateDesignerDto): Promise<AxiosResponse<{ payload: Designer, status: number, errors: Array<string> }>> => Axios.patch(Url.updateDesigner, data)

      static getDesigner = (): Promise<AxiosResponse> => Axios.get(Url.getDesign)


      static uploadFile = (data: any): Promise<AxiosResponse> => Axios.post(Url.uploadFile, data, { headers: { ...Axios.defaults.headers.common } })
      static getAxos = () => Axios.defaults.headers
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
}
