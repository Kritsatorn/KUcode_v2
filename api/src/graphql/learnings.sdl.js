export const schema = gql`
  type Learning {
    id: Int!
    name: String
    typingList: [TypingScript]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    learnings: [Learning!]! @requireAuth
    learning(id: Int!): Learning @requireAuth
  }

  input CreateLearningInput {
    name: String
  }

  input UpdateLearningInput {
    name: String
  }

  type Mutation {
    createLearning(input: CreateLearningInput!): Learning! @requireAuth
    updateLearning(id: Int!, input: UpdateLearningInput!): Learning!
      @requireAuth
    deleteLearning(id: Int!): Learning! @requireAuth
  }
`
