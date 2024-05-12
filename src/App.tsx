import { useRef, useState } from "react";

import Cart from "./components/Cart/index";
import Modal from "./components/ui/Modal";
import { productList } from "./utils/productList";
import Button from "./components/ui/Button";
// import {useState } from "react";

function App() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <>
      <Modal title={"Add New Product"} open={open} setOpen={setOpen} cancelButtonRef={cancelButtonRef}>
        <div className="bg-gray-50 px-4 py-3 gap-2 items-center sm:flex  sm:flex-row-reverse sm:px-6">
          <Button
            className="inline-flex justify-center bg-indigo-600  hover:indigo-red-500"
            onClick={() => setOpen(false)}
          >
            Add product
          </Button>
          <Button
            className="mt-3 md:mt-0 inline-flex justify-center bg-red-600  hover:indigo-red-500"
            onClick={() => setOpen(false)}
            ref={cancelButtonRef}
          >
            Cancel
          </Button>
        </div>
      </Modal>

      <main className="products">
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
      </main>
    </>
  );
}

export default App;
