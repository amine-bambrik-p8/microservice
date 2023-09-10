export interface IOrderItem {
  id?: number;
  quantity: number;
  productId: number;
  price: number;
}
export class OrderItem implements IOrderItem {
  #data: IOrderItem;
  constructor(data: IOrderItem) {
    this.#data = data;
  }
  get id() {
    return this.#data.id;
  }
  get quantity() {
    return this.#data.quantity;
  }
  get productId() {
    return this.#data.productId;
  }
  get price() {
    return this.#data.price;
  }

  getData() {
    return this.#data;
  }
}
