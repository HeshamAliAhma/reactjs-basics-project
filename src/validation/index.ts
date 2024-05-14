export const productValidation = (product: { title: string, description: string, imageURL: string, price: string }) => {

//  ** Return An Object
    const Errors: { title: string, description: string, imageURL: string, price: string } = {
        title: '',
        description: '',
        imageURL: '',
        price: ''
    };
    const validURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);
    if (!product.title.trim() || product.title.length < 10 || product.title.length > 100) {
        Errors.title = 'product Title must be between 10 and 100 characters';
    }
    if (!product.description.trim() || product.description.length < 10 || product.description.length > 900) {
        Errors.description = 'product description must be between 10 and 900 characters';
    }
    if(!product.imageURL.trim() || !validURL) {
        Errors.imageURL = 'product image URL must be valid';
    }
    if(!product.price.trim() || !isNaN(Number(product.price)) ){
        Errors.price = 'product price must be a number';
    }

    return Errors
}