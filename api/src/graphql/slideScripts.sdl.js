export const schema = gql`
  type SlideScript {
    id: Int!
    order: Int!
    timeDiff: String!
    isOpen: Boolean!
    PageNumber: Int!
    Learning: Learning
    learningId: Int
  }

  type Query {
    slideScripts: [SlideScript!]! @requireAuth
    slideScript(id: Int!): SlideScript @requireAuth
  }

  input CreateSlideScriptInput {
    order: Int!
    timeDiff: String!
    isOpen: Boolean!
    PageNumber: Int!
    learningId: Int
  }

  input UpdateSlideScriptInput {
    order: Int
    timeDiff: String
    isOpen: Boolean
    PageNumber: Int
    learningId: Int
  }

  type Mutation {
    createSlideScript(input: CreateSlideScriptInput!): SlideScript! @requireAuth
    updateSlideScript(id: Int!, input: UpdateSlideScriptInput!): SlideScript!
      @requireAuth
    deleteSlideScript(id: Int!): SlideScript! @requireAuth
  }
`
