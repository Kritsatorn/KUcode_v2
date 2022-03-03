export const schema = gql`
  type Learning {
    id: Int!
    name: String
    audioURL: String!
    imageList: [Image]!
    typingList: [TypingScript]!
    cursorList: [CursorScript]!
    sideBarList: [SideBarScript]!
    slideList: [SlideScript]!
    createdAt: DateTime!
    updatedAt: DateTime!
    User: User
    userId: Int
  }

  type Query {
    learnings: [Learning!]! @requireAuth
    learning(id: Int!): Learning @requireAuth
  }

  input CreateLearningInput {
    name: String
    audioURL: String!
    userId: Int
  }

  input UpdateLearningInput {
    name: String
    audioURL: String
    userId: Int
  }

  type Mutation {
    createLearning(input: CreateLearningInput!): Learning! @requireAuth
    updateLearning(id: Int!, input: UpdateLearningInput!): Learning!
      @requireAuth
    deleteLearning(id: Int!): Learning! @requireAuth
  }
`
