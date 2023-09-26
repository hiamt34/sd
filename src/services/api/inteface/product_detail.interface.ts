import { FileUpload } from "./upload_file"

export class ProductDetail {
      id: string = ""
      status: ProductDetailStatus = ProductDetailStatus.Pending
      photo_befor: FileUpload = null as any
      photo_design_befor: FileUpload = null as any
      photo_after: FileUpload = null as any
      photo_design_after: FileUpload = null as any
      createdAt: Date = new Date
      static createObj = (src?: Partial<ProductDetail>): ProductDetail => {
            const obj = new ProductDetail();

            return {
                  ...obj,
                  ...src,
            };
      };
}
export enum ProductDetailStatus {
      Pending = "PENDING",
      Success = "SUCCESS"
}
export interface CreateProductDetailDto {
      product_id: number
      photo_befor: {
            id: string
      }
      photo_design_befor: {
            id: string
      }
      photo_after: {
            id: string
      }
      photo_design_after: {
            id: string
      }
}