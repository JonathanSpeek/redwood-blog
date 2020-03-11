import BlogLayout from 'src/layouts/BlogLayout'
import HotTipCell from 'src/components/HotTipCell'

const HotTipPage = ({ id }) => {
  return (
    <BlogLayout>
      <HotTipCell id={id} />
    </BlogLayout>
  )
}

export default HotTipPage
