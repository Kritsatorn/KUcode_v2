export const schema = gql`
  type CursorScript {
    id: Int!
    order: Int!
    timeDiff: String!
    positionX: Int!
    positionY: Int!
    hidden: Boolean!
    Learning: Learning
    learningId: Int
  }

  type Query {
    cursorScripts: [CursorScript!]! @requireAuth
    cursorScript(id: Int!): CursorScript @requireAuth
    cursorScriptByLID(learningId: Int!): [CursorScript!]! @requireAuth
  }

  input CreateCursorScriptInput {
    order: Int!
    timeDiff: String!
    positionX: Int!
    positionY: Int!
    hidden: Boolean!
    learningId: Int
  }

  input UpdateCursorScriptInput {
    order: Int
    timeDiff: String
    positionX: Int
    positionY: Int
    hidden: Boolean
    learningId: Int
  }

  type Mutation {
    createCursorScript(input: CreateCursorScriptInput!): CursorScript!
      @requireAuth
    updateCursorScript(
      id: Int!
      input: UpdateCursorScriptInput!
    ): CursorScript! @requireAuth
    deleteCursorScript(id: Int!): CursorScript! @requireAuth
  }
`
