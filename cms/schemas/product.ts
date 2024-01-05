import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'product',
  type: 'document',

  fields: [
    defineField({
      name: 'productTitle',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'productprice',
      title: 'price',
      type: 'string',
    }),

    defineField({
      name: 'productimg1',
      title: 'product images',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'productimg2',
      title: 'product images',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'productimg3',
      title: 'product images',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'productimg4',
      title: 'product images',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
