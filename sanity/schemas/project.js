export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'gallery',
        title: 'Gallery',
        type: 'array',
        of: [{ type: 'image', 
        options: {
          hotspot: true,
        },}]
       },
      {
        name: 'categories',
        title: 'Categories',
        type: 'reference',
        to: {type: 'category'},
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'text',
      },
    ],
  
    preview: {
      select: {
        title: 'title',
        category: 'category.title',
      },
    },
  }
  