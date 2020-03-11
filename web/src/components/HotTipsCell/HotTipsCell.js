import HotTip from 'src/components/HotTip'

export const QUERY = gql`
  query {
    tips {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ tips }) => {
  return tips.map((tip) => <HotTip key={tip.id} tip={tip} />)
}
