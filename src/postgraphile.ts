import { postgraphile as createPostgraphile } from 'postgraphile'

export const postgraphile = createPostgraphile(
  {
    connectionString: process.env.DATABASE_URL,
  },
  'public',
  {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
  }
)
