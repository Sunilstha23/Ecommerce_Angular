export interface Product {
    productID?: number;
    productName: string;
    categoryID: number;
    description: string;
    price: number;
    isAvailable: boolean;
    productImg?: string;
    color: string;
    rating: string;
}
