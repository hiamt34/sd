export class Product {
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
      static createObj = (src?: Partial<Product>): Product => {
            const obj = new Product();

            return {
                  ...obj,
                  ...src,
            };
      };
}
