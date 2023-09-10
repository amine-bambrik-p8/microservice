import { OrderItem, IOrderItem } from './order-item.model';
import { OrderStatus } from './order-status.enum';

interface IEditOrder {
  addressLineOne?: string;
  addressLineTwo?: string;
  addressCity?: string;
  addressProvince?: string;
  addressZipcode?: string;
  addressCountry?: string;
}
interface IOrder {
  id?: number;
  addressLineOne: string;
  addressLineTwo?: string;
  addressCity: string;
  addressProvince: string;
  addressZipcode: string;
  addressCountry: string;
  orderItems: IOrderItem[];
  orderStatus: OrderStatus;
  createdAt?: Date;
  updatedAt?: Date;
}
export class Order {
  #data: IOrder;
  constructor(data: IOrder) {
    this.#data = data;
    this.#data.orderItems = data?.orderItems?.map((i) => new OrderItem(i));
  }
  edit({
    addressLineOne,
    addressLineTwo,
    addressCity,
    addressProvince,
    addressZipcode,
    addressCountry,
  }: IEditOrder) {
    this.#data.addressLineOne = addressLineOne ?? this.#data.addressLineOne;
    this.#data.addressLineTwo = addressLineTwo ?? this.#data.addressLineTwo;
    this.#data.addressCity = addressCity ?? this.#data.addressCity;
    this.#data.addressProvince = addressProvince ?? this.#data.addressProvince;
    this.#data.addressZipcode = addressZipcode ?? this.#data.addressZipcode;
    this.#data.addressCountry = addressCountry ?? this.#data.addressCountry;
  }
  getData() {
    return this.#data;
  }
}
