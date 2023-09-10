interface IProduct {
  id?: number;
  name: string;
  description: string;
  price: number;
}

export class Product {
  #data: IProduct;

  constructor(data: IProduct) {
    this.#data = data;
  }

  get id() {
    return this.#data.id;
  }

  get name() {
    return this.#data.name;
  }

  get description() {
    return this.#data.description;
  }

  get price() {
    return this.#data.price;
  }
}
