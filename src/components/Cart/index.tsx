const index = () => {
  return (
    <div className="product-cart">
        <img src="" alt="" />
        <h3 className="title">hesham</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <div className="colors">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
        </div>
        <div className="info">
            <h3 className="price"></h3>
            <div className="category">
                <div className="category-image">
                    <img src="" alt="" />
                </div>
                <div className="category-name">
                    cars
                </div>
            </div>
        </div>
        <div className="buttons">
            <button className="edit-to-cart">Edit</button>
            <button className="remove-from-cart">Destory</button>
        </div>
    </div>
  )
}

export default index