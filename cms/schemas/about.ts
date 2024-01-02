import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'aboutus',
  type: 'document',

  fields: [
    defineField({
      name: 'mainimage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'title',
      title: 'Image name',
      type: 'string',
    }),
    defineField({
      name: 'abouttitle',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'body1',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'abouttitle2',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'body2',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'mainimage2',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'mainimage3',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),

    defineField({
      name: 'mainimage4',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'mainimage5',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
