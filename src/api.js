const getProducts = () => {
    try {
      const response = fetch("https://fakestoreapi.com/products");
      return response.json();
    } catch (e) {
      return [];
    }
  };

  const getProductById = (id) => {
    try {
      const response = fetch(`https://fakestoreapi.com/products/${id}`);
      return response.json();
    } catch (e) {
      return null;
    }
  };
  
  export { getProducts, getProductById };