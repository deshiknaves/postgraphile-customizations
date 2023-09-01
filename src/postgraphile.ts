import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector'
import { gql, makeExtendSchemaPlugin } from 'graphile-utils'
import { postgraphile as createPostgraphile } from 'postgraphile'

const ExternalApiPlugin = makeExtendSchemaPlugin((build) => {
  return {
    typeDefs: gql`
      type Photo {
        albumId: Int
        id: Int
        title: String
        url: String
        thumbnailUrl: String
      }

      extend type Query {
        photo: Photo
      }
    `,
    resolvers: {
      Query: {
        photo: async () => {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/photos/1'
          )
          const json = await response.json()

          return json
        },
      },
    },
  }
})

export const postgraphile = createPostgraphile(
  {
    connectionString: process.env.DATABASE_URL,
  },
  'public',
  {
    appendPlugins: [PgSimplifyInflectorPlugin, ExternalApiPlugin],
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
  }
)
