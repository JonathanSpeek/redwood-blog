import { Link, routes } from '@redwoodjs/router'
import Tips from 'src/components/Admin/Tips'

export const QUERY = gql`
  query POSTS {
    tips {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No tips yet. '}
      <Link
        to={routes.newTip()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ tips }) => {
  return <Tips tips={tips} />
}
