export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fieldsets: [
    {
      name: 'alert',
      title: 'Alert',
      options: {collapsible: false, collapsed: false}
    }
  ],
  fields: [
    {
      name: 'alertToggle',
      type: 'boolean',
      title: 'Enable Alert',
      description: 'If this is enabled, the alert will be displayed on the front-end of the wbesite, at the top.',
      fieldset: 'alert'
    },
    {
      name: 'alertText',
      type: 'boldItalicLinksPortableText',
      title: 'Alert text',
      description: 'This will be the text shown in the alert at the top of the website, when it\'s enabled',
      fieldset: 'alert'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'author',
      type: 'reference',
      description: 'Publish an author and set a reference to them here.',
      title: 'Author',
      to: [{type: 'author'}]
    }
  ]
}
