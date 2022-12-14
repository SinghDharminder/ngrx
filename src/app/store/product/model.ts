export interface Product{
    id :number;
    uid : string;
    blend_name :string;
    origin:string;
    variety : string;
    notes : string;
    intensifier : string;
  }
  export interface ProductState {
      products:Product[]
  }