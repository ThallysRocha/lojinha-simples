const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      return response.json();
    } catch (e) {
      return [];
    }
  };

  const getProductById = async (id) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      return response.json();
    } catch (e) {
      return null;
    }
  };
  
  export { getProducts, getProductById };