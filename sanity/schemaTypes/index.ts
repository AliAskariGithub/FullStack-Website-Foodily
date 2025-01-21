import { type SchemaTypeDefinition } from 'sanity'
import { Chief } from './chief'
import { Food } from './food'
import { Category } from './category'
import { Recipe } from './recipe'
import { SpecialMenu } from './specialmenu'
import { Orders } from './orders'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [SpecialMenu, Chief, Food, Category, Recipe, Orders],
}
