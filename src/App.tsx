// -------------- Imports --------------

// -------------- Events --------------
import { ChangeEvent, FormEvent, useRef, useState } from "react";

// -------------- Components --------------
import AllProducts from "./components/AllProducts";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

// -------------- Interfaces --------------
import { defaultProductObj } from "./utils/productObj";
import { Iproduct } from "./interfaces";
import { inputFormList } from "./utils/inputFormList";
import { productValidation } from "./validation";

function App() {
  // -------------- State --------------
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  const [product, setProduct] = useState<Iproduct>(defaultProductObj);

  // -------------- Handlers --------------
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const cancelButton = () => {
    setProduct(defaultProductObj);
    setOpen(false);
  };

  const { title, description, imageURL, price } = product;

  const onSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
    });

    const hasErrorMsg = Object.values(errors).some(value => value !== '') && Object.values(errors).every(value => value !== '');

    
    if(hasErrorMsg){
      console.log('send this product to our server');
    }
    console.log(`the old msg: ${hasErrorMsg}`);

  };

  return (
    <>
      <Header />
      <Hero />
      <div className="container mt-5 py-3" id="products">
        <Modal
          title={"Add New Product"}
          open={open}
          setOpen={setOpen}
          cancelButtonRef={cancelButtonRef}
        >
          <form className="mt-2" onSubmit={onSubmitForm}>
            {inputFormList.map((input) => {
              return (
                <div className="flex flex-col mx-auto" key={input.id}>
                  <label htmlFor={input.id} className="font-bold mb-2">
                    {input.label}
                  </label>
                  <input
                    type={input.type}
                    id={input.id}
                    className="border mb-2 pl-4 p-2 rounded-lg outline-indigo-400 shadow-sm"
                    name={input.name}
                    value={product[input.name]}
                    onChange={onChangeHandler}
                  />
                </div>
              );
            })}
            <div className=" py-3 gap-2 items-center sm:flex  sm:flex-row-reverse ">
              <Button className="inline-flex justify-center bg-indigo-600  hover:bg-indigo-800">
                Add product
              </Button>
              <Button
                className="mt-3 sm:mt-0 inline-flex justify-center bg-gray-300  hover:bg-gray-600"
                onClick={cancelButton}
                ref={cancelButtonRef}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Modal>

        <main className="products">
          <AllProducts />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
