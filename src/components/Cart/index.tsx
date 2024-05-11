import { Iproduct } from "../../interfaces";
import Button from '../ui/Button'





const index = ({title,description,imageURL,price,colors,category}: Iproduct) => {
  return (
    <div className="product-cart border rounded-sm p-1 max-w-sm mx-auto">

        <div className="w-full h-52 border p-1 hover:p-0">
            <img src={imageURL} alt={title} className="rounded-sm hover:rounded-none h-full mx-auto"/>
        </div>



        <h1 className="title">{title.slice(0,20)}{title.length > 20 ? '...' : ''}</h1>
        <p className="description text-gray-500">{description.slice(0,50)}{description.length > 50 ? '...' : ''}</p>
        <div className="colors flex items-center gap-1 mt-3">
            <div className="color bg-red-700 rounded-full h-5 w-5 cursor-pointer"></div>
            <div className="color bg-blue-700 rounded-full h-5 w-5 cursor-pointer"></div>
            <div className="color bg-yellow-700 rounded-full h-5 w-5 cursor-pointer"></div>
        </div>
        <div className="info flex items-center justify-between mt-3">
            <h3 className="price text-indigo-600 font-bold">${price}</h3>
            <div className="category flex items-center gap-1">
                <div className="category-image">
                    <img src={category.imageURL} alt={category.name} className="rounded-full h-6 w-6"/>
                </div>
                <div className="category-name">
                    {category.name}
                </div>
            </div>
        </div>
        <div className="buttons flex items-center justify-between gap-1 mt-3">
            <Button className="bg-indigo-600 ">Edit</Button>
            <Button className="bg-red-600 ">Destory</Button>
        </div>
    </div>
  )
}

export default index