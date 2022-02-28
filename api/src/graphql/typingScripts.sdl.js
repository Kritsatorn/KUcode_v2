export const schema = gql`
  type TypingScript {
    id: Int!
    order: Int!
    timeDiff: String!
    typing: Typing!
    learning: Learning
    learningId: Int
    typingId: Int!
  }

  type Query {
    typingScripts: [TypingScript!]! @requireAuth
    typingScript(id: Int!): TypingScript @requireAuth
  }

  input CreateTypingScriptInput {
    order: Int!
    timeDiff: String!
    learningId: Int
    typingId: Int!
  }

  input UpdateTypingScriptInput {
    order: Int
    timeDiff: String
    learningId: Int
    typingId: Int
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
