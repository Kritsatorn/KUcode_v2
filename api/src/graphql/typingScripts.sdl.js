export const schema = gql`
  type TypingScript {
    id: Int!
    order: Int!
    timeDiff: String!
    css: String!
    html: String!
    js: String!
    learning: Learning
    learningId: Int
  }

  type Query {
    typingScripts: [TypingScript!]! @requireAuth
    typingScript(id: Int!): TypingScript @requireAuth
  }

  input CreateTypingScriptInput {
    order: Int!
    timeDiff: String!
    css: String!
    html: String!
    js: String!
    learningId: Int
  }

  input UpdateTypingScriptInput {
    order: Int
    timeDiff: String
    css: String
    html: String
    js: String
    learningId: Int
  }

  type Mutation {
    createTypingScript(input: CreateTypingScriptInput!): TypingScript!
      @requireAuth
    updateTypingScript(
      id: Int!
      input: UpdateTypingScriptInput!
    ): TypingScript! @requireAuth
    deleteTypingScript(id: Int!): TypingScript! @requireAuth
  }
`
