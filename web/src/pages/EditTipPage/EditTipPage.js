import TipsLayout from 'src/layouts/TipsLayout'
import EditTipCell from 'src/components/EditTipCell'

const EditTipPage = ({ id }) => {
  return (
    <TipsLayout>
      <EditTipCell id={id} />
    </TipsLayout>
  )
}

export default EditTipPage
