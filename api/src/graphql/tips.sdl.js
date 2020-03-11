export const schema = gql`
  type Tip {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    tips: [Tip]
    tip(id: Int!): Tip
  }

  input TipInput {
    title: String
    body: String
  }

  type Mutation {
    createTip(input: TipInput!): Tip
    updateTip(id: Int!, input: TipInput!): Tip
    deleteTip(id: Int!): Tip
  }
`
