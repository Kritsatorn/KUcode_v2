export const schema = gql`
  type SideBarScript {
    id: Int!
    order: Int!
    timeDiff: String!
    value: String!
    Learning: Learning
    learningId: Int
  }

  type Query {
    sideBarScripts: [SideBarScript!]! @requireAuth
    sideBarScript(id: Int!): SideBarScript @requireAuth
  }

  input CreateSideBarScriptInput {
    order: Int!
    timeDiff: String!
    value: String!
    learningId: Int
  }

  input UpdateSideBarScriptInput {
    order: Int
    timeDiff: String
    value: String
    learningId: Int
  }

  type Mutation {
    createSideBarScript(input: CreateSideBarScriptInput!): SideBarScript!
      @requireAuth
    updateSideBarScript(
      id: Int!
      input: UpdateSideBarScriptInput!
    ): SideBarScript! @requireAuth
    deleteSideBarScript(id: Int!): SideBarScript! @requireAuth
  }
`
