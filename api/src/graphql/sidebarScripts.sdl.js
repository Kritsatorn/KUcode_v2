export const schema = gql`
  type SidebarScript {
    id: Int!
    order: Int!
    timeDiff: String!
    isOpen: Boolean!
    PageNumber: Int!
    Learning: Learning
    learningId: Int
  }

  type Query {
    sidebarScripts: [SidebarScript!]! @requireAuth
    sidebarScript(id: Int!): SidebarScript @requireAuth
  }

  input CreateSidebarScriptInput {
    order: Int!
    timeDiff: String!
    isOpen: Boolean!
    PageNumber: Int!
    learningId: Int
  }

  input UpdateSidebarScriptInput {
    order: Int
    timeDiff: String
    isOpen: Boolean
    PageNumber: Int
    learningId: Int
  }

  type Mutation {
    createSidebarScript(input: CreateSidebarScriptInput!): SidebarScript!
      @requireAuth
    updateSidebarScript(
      id: Int!
      input: UpdateSidebarScriptInput!
    ): SidebarScript! @requireAuth
    deleteSidebarScript(id: Int!): SidebarScript! @requireAuth
  }
`
