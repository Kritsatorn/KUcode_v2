export const schema = gql`
  type Image {
    id: Int!
    title: String!
    url: String!
    Learning: Learning
    learningId: Int
  }

  type Query {
    images: [Image!]! @requireAuth
    image(id: Int!): Image @requireAuth
    imageByLID(learningId: Int!): [Image!]! @requireAuth
  }

  input CreateImageInput {
    title: String!
    url: String!
    learningId: Int
  }

  input UpdateImageInput {
    title: String
    url: String
    learningId: Int
  }

  type Mutation {
    createImage(input: CreateImageInput!): Image! @requireAuth
    updateImage(id: Int!, input: UpdateImageInput!): Image! @requireAuth
    deleteImage(id: Int!): Image! @requireAuth
  }
`
