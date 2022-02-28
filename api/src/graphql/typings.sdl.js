export const schema = gql`
  type Typing {
    id: Int!
    css: String!
    html: String!
    js: String!
    TypingScript: [TypingScript]!
  }

  type Query {
    typings: [Typing!]! @requireAuth
  }

  input CreateTypingInput {
    css: String!
    html: String!
    js: String!
  }

  input UpdateTypingInput {
    css: String
    html: String
    js: String
  }
`
