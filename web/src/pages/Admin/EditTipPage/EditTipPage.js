import AdminLayout from 'src/layouts/AdminLayout/AdminLayout'
import EditTipCell from 'src/components/Admin/EditTipCell'

const EditTipPage = ({ id }) => {
  return (
    <AdminLayout>
      <EditTipCell id={id} />
    </AdminLayout>
  )
}

export default EditTipPage
