export default {
  name: 'post',
  title: 'Post',
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
      name: 'team',
      title: 'Team member',
      type: 'reference',
      to: {type: 'team'},
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
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
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
      author: 'team.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {team} = selection
      return Object.assign({}, selection, {
        subtitle: team && `by ${team}`,
      })
    },
  },
}
