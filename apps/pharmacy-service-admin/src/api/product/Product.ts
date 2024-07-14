export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  category: string | null;
  price: number | null;
  stock: number | null;
};
