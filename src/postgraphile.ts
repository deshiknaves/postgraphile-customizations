import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector'
import { postgraphile as createPostgraphile } from 'postgraphile'

export const postgraphile = createPostgraphile(
  {
    connectionString: process.env.DATABASE_URL,
  },
  'public',
  {
    appendPlugins: [PgSimplifyInflectorPlugin],
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
  }
)
