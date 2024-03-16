class ProductRepository {
  async loadProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      return data.products;
    } catch (error) {
      console.log("An error occurred:", error);
      return null;
    }
  }
}

async function main() {
  const repository = new ProductRepository();
  const products = await repository.loadProducts();
 console.log(products);
}

main();
