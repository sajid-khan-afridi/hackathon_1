import { defineField } from "sanity";
import { category } from "./category";
import { ptype } from "./ptype";

export const product={
    name:"product",
    type:"document",
    title:"Products",
    fields:[
        defineField({
            name:"id",
            title:"Product id",
            type:"string",
        }),
        defineField({
            name:"quantity",
            title:"Quantity",
            type:"number",
        }),
        defineField({
        name:"title",
        type:"string",
        title:"Product Title"
    }
    ),
        {
        name:"description",
        type:"string",
        title:"Product Description"
    },
        {
        name:"image",
        type:"image",
        title:"Product Image"
    },
    {
        name:"alt",
        type:"string",
        title:"Image Alt"
    },
    defineField({
        name:"price",
        type:"number",
        title:"Product Price"
    }),
    defineField({
        name:"category",
        title:"Category",
        type:"reference",
        to:[
            {
                type:"category",
            }
        ]
    }),
    defineField({
        name:"ptype",
        title:"Product Type",
        type:"reference",
        to:[
            {
                type:"ptype"
            }
        ]
    }),
    defineField({
        name:"pcare",
        title:"Product Care",
        type:"array",
        of: [{
            name:"list",
            title:"List",
            type:"string",
        }]
    })
]
}