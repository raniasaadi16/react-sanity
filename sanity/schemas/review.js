export default {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'client',
        title: 'Client',
        type: 'string',
      },
      {
        name: 'clientJob',
        title: 'Client Job',
        type: 'string',
      },
      {
        name: 'content',
        title: 'Content',
        type: 'text',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
      },
      {
        name: 'clientImage',
        title: 'Client image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  }
  