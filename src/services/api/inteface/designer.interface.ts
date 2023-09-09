export class Designer {
      id: number = 0
      email: string = ""
      provider: string = ""
      firstName: string = ""
      photo: string = ""
      banner: string = ""
      bio: string = ""
      money: number = 0
      count_products: number = 0
      photo_avatar_default: string = ""
      photo_banner_default: string = ""
      role: Role = {
            id: 0,
            name: "",
            __entity: ""
      }
      status: Status = {
            id: 0,
            name: "",
            __entity: ""
      }
      static createObj = (src?: Partial<Designer>): Designer => {
            const obj = new Designer();

            return {
                  ...obj,
                  ...src,
            };
      };
}

export interface LoginDto {
      email: string
      password: string
}
export interface ForgotPassword {
      email: string
}
export interface RegisterDto extends LoginDto {
      firstName: string
}
export interface Role {
      id: number
      name: string
      __entity: string
}
export interface ConfirmEmailDto {
      email: string
      code: string
}

export interface UpdateDesignerDto {
      photo?: {
            id: string
      }
      banner?: {
            id: string
      },
      firstName?: string
      bio?: string
      password?: string,
      oldPassword?: string
}
export interface Status {
      id: number
      name: string
      __entity: string
}