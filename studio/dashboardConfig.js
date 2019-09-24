export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5d89e6b0910b910971403f21',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-asj2ov42',
                  apiId: '769c68e0-5b6c-4220-a84b-4ccea0060406'
                },
                {
                  buildHookId: '5d89e6b04857ce1e67572933',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t2mnpsgj',
                  apiId: '9574119e-edd4-4b65-992d-9302f39c1d40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/martinasbjornsen/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t2mnpsgj.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
