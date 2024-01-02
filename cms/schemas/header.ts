import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'header',
  type: 'document',

  fields: [
    defineField({
      name: 'mainheaderImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'title',
        title: 'Image name',
        type: 'string'
    }),
],
})



