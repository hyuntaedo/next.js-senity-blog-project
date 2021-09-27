export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // title의 source
        maxLength: 96, // unique한 값이 되어야 한다.
      },
      validation:Rule => Rule.required()// url을 만들어서 사용하는 경우
    },
    {
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference', // type이 author인 document를 refernce로 가져오는 것
      to: {type: 'author'},
      validation: Rule => Rule.required()
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
      validation: Rule => Rule.required()
    },
    {
      name: 'createdAt',
      title: 'Created at',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'alt',
          options: {
            isHighlighted: true,
          },
          validation: Rule => Rule.required(),
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'reference',
      to: {type: 'tag'},
      validation: Rule => Rule.required()
    },
    
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'thumbnail',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
