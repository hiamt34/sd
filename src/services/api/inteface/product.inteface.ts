export class Product {
      id: number = 0
      user_id: number = 0
      status: string = ""
      categories: Array<string> = []
      description: string = ""
      name: string = ""
      photo: { id: string } = { id: "" }
      price: number = 0
      sale: number = 0
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
