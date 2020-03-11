import Tip from 'src/components/Admin/Tip'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    tip: tip(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Tip not found</div>

export const Success = ({ tip }) => {
  return <Tip tip={tip} />
}
