interface Product {
  sys: {
    id: string;
  };
  fields: {
    productName: string;
    price: number;
    rating: number;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
