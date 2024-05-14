import { productList } from '../utils/productList';
import Cart from "./Cart";


const AllProducts = () => {
  return (
    <>
    {productList.map((product) => (
        <Cart
          key={product.id}
          title={product.title}
          description={product.description}
          imageURL={product.imageURL}
          price={product.price}
          colors={[]}
          category={{
            name: product.category.name,
            imageURL: product.category.imageURL,
          }}
        />
      ))}
    </>
  )
}

export default AllProducts