interface IEditProduct {
  name?: string;
  description?: string;
  quantity?: number;
}
interface IProduct {
  id?: number;
  name: string;
  description: string;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
}
export class Product {
  #data: IProduct;
  constructor(data: IProduct) {
    this.#data = data;
  }
  edit({ description, name, quantity }: IEditProduct) {
    this.#data.description = description ?? this.#data.description;
    this.#data.name = name ?? this.#data.name;
    this.#data.quantity = quantity ?? this.#data.quantity;
  }
  getData() {
    return this.#data;
  }
}
