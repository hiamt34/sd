export class Order {
      id: string = ""
      productDetailId: string = ""
      size: string = ""
      quantity: number = 0
      price: number = 0
      static createObj = (src?: Partial<Order>): Order => {
            const obj = new Order();

            return {
                  ...obj,
                  ...src,
            };
      };
} 