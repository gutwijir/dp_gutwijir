import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://ulab.kuubstudios.com/graphql/',
  documents: './src/graphql/**/*.{ts,gql,graphql}',
  hooks: { afterAllFileWrite: ['prettier --write'] },
  generates: {
    'src/generated-graphql/types.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
}

export default config
