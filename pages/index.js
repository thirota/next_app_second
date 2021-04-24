import Layout from '../components/layout'
import MyImage from '../components/image'

export default function Home() {
  let title = "Index"

  return (
    <div>
      <Layout header="Next.js" title="Top page">
        <div className="alert alert-primary text-center">
          <h5 className="my-3">Welcome to next.js!</h5>
          <MyImage fileName="image.jpg" width="80"/>
        </div>
      </Layout>
    </div>
  )
}
