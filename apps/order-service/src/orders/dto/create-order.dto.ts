class OrderItemDto {
  productId: number;
  quantity: number;
}
export class CreateOrderDto {
  addressLineOne: string;
  addressLineTwo?: string;
  addressCity: string;
  addressProvince: string;
  addressZipcode: string;
  addressCountry: string;
  orderItems: OrderItemDto[];
}
