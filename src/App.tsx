import Cart from "./components/Cart/index";
import { productList } from "./utils/productList";

function App() {
  return (
    <main className="products">
      {productList.map((product) => (
        <Cart key={product.id} title={product.title} description={product.description} imageURL={product.imageURL} price={product.price} colors={[]} category={{
          name: product.category.name,
          imageURL: product.category.imageURL
        }}
        />
      ))}
    </main>
  );
}

export default App;

