export class Product {
  id: number;
  name: string;
  cost: number;
  quantity: number;

  constructor(id: number, name: string, cost: number, quantity: number) {
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.quantity = quantity;
  }
}
