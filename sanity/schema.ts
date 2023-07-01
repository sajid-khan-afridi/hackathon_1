import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './category'
import { ptype } from './ptype'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category,ptype],
}
