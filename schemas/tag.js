export default {
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name:'slug',
      title:'Slug',
      type:'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title', // title의 source
        maxLength: 96, // unique한 값이 되어야 한다.
      },
    }
  ],
  preview: {
    select: {
      title:'title',
      subtitle:'slug.current',
    }
  }
}
