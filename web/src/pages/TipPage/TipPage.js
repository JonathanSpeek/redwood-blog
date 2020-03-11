import TipsLayout from 'src/layouts/TipsLayout'
import TipCell from 'src/components/TipCell'

const TipPage = ({ id }) => {
  return (
    <TipsLayout>
      <TipCell id={id} />
    </TipsLayout>
  )
}

export default TipPage
