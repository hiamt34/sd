import { User } from "@/components/commons/product"
import { FileUpload } from "./upload_file"
import { ProductDetail } from "./product_detail.interface"

export class Product {
      id: number = 0
      user_id: number = 0
      status: string = ""
      categories: Array<string> = []
      description: string = ""
      name: string = ""
      user: User = null as any
      photo: FileUpload = null as any
      products_item: Array<ProductDetail> = []
      price: number = 0
      sale: number = 0
      createdAt: string = ""
      static createObj = (src?: Partial<Product>): Product => {
            const obj = new Product();

            return {
                  ...obj,
                  ...src,
            };
      };
}

export interface CreateProductDto {
      categories: Array<string>
      name: string
      photo: {
            id: string
      }
      description: string
}
export interface GetProductDto {
      page: number
      pageSize: number
      sort?: string
      filter?: Array<string>
      dateFrom?: string
      dateTo?: string
}
