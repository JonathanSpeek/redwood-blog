import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TipForm from 'src/components/TipForm'

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
const UPDATE_POST_MUTATION = gql`
  mutation UpdateTipMutation($id: Int!, $input: TipInput!) {
    updateTip(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ tip }) => {
  const [updateTip, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.tips())
      location.reload()
    },
  })

  const onSave = (input, id) => {
    updateTip({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Tip {tip.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <TipForm tip={tip} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
