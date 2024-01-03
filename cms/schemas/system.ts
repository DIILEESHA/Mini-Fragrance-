import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'system',
  title: 'system',
  type: 'document',

  fields: [
    defineField({
      name: 'videoFile',
      title: 'Video File',
      type: 'file',
    }),

    defineField({
      name: 'systtitle',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'sysbody',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'systitle2',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'sysimage1',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'sysimage2',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'systitle3',
      title: 'Title',
      type: 'string',
    }),

    defineField({
      name: 'sysbody2',
      title: 'Body',
      type: 'blockContent',
    }),

    defineField({
      name: 'sysimage4',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'sysimage5',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'sysimage6',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
