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
                  buildHookId: '5f3ab343ac0d49611d192565',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gvfwg3wk',
                  apiId: '7b695271-6e5e-4bde-ad35-6b481d317381'
                },
                {
                  buildHookId: '5f3ab343fb8f78918af53adf',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-23qf9inz',
                  apiId: '15f579b6-dc93-4812-b7cd-3fc3aa9c0000'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mackrp/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-23qf9inz.netlify.app', category: 'apps'}
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
