type ShopId = string;

export class Product {
  name: string;
  id: string;
  shopId: ShopId;
  quantity: number;
  /**
   * Constructs a new Product.
   *
   * @param name - The name of the product
   * @param id - The id of the product
   * @param shopId - The id of the shop the product belongs to
   */
  constructor(name: string, id: string, quantity: number, shopId: ShopId) {
    this.name = name;
    this.id = id;
    this.shopId = shopId;
    this.quantity = quantity;
  }
}

export class Shop {
  name: string;
  id: ShopId;
  isSelected: boolean;
  /**
   * Constructs a new Shop.
   *
   * @param name - The name of the shop
   * @param id - The id of the shop
   */
  constructor(name: string, id: ShopId) {
    /**
     * The name of the shop
     */
    this.name = name;
    /**
     * The id of the shop
     */
    this.id = id;
    this.isSelected = false;
  }
};
