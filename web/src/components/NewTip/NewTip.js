import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import TipForm from 'src/components/TipForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateTipMutation($input: TipInput!) {
    createTip(input: $input) {
      id
    }
  }
`

const NewTip = () => {
  const [createTip, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.tips())
      location.reload()
    },
  })

  const onSave = (input) => {
    createTip({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Tip</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <TipForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewTip
