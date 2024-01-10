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
      name: 'productpreviousprice',
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'productTitle', // Use the product title as the source for the slug
        maxLength: 200, // Set a maximum length for the slug
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
    defineField({
      name: 'singleproductbody',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'singleproductbody1',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'singleproductbody2',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'singleproductbody3',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
