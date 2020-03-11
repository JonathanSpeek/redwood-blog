import HotTip from 'src/components/HotTip'

export const QUERY = gql`
  query($id: Int!) {
    tip(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ tip }) => {
  return <HotTip tip={tip} />
}
