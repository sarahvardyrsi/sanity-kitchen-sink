export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe265928bbfae1eb5ac340b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-i2u5jp6j',
                  apiId: 'f4ab5bbf-591b-4291-997a-a65640341b7d'
                },
                {
                  buildHookId: '5fe26593f55af71d58d53a86',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mdhco8vc',
                  apiId: 'b3b4d868-e6e8-4155-afb3-7e02420bcd61'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sarahvardyrsi/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mdhco8vc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
