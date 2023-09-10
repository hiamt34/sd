export class ProductDetail {
      id: string = ""
      user_id: string = ""
      status: string = ""
      imgBefor: string = ""
      imgDesignBefor: string = ""
      imgAfter: string = ""
      imgDesignAfter: string = ""
      category: Array<string> = []
      name: string = ""
      count: number = 0
      created_at: Date = new Date
      static createObj = (src?: Partial<ProductDetail>): ProductDetail => {
            const obj = new ProductDetail();

            return {
                  ...obj,
                  ...src,
            };
      };
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