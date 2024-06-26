import { IFormInput } from "../interfaces";


export const inputFormList : IFormInput[] = [
    {
        id: 'title',
        name: 'title',
        label: "Product Title:",
        type: 'text',
    },
    {
        id: 'description',
        name: 'description',
        label: "Product Description:",
        type: 'text',
    },
    {
        id: 'image',
        name: 'imageURL',
        label: "Product Image URL:",
        type: 'text',
    },
    {
        id: 'price',
        name: 'price',
        label: "Product Price:",
        type: 'text',
    },
]