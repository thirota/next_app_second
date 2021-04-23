import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  let title = "Index"

  return (
    <div>
      <Layout header="Next.js" title="Top page">
        <div className="alert alert-primary text-center">
          <h5 className="my-3">Welcome to next.js!</h5>
          <Link href="/other">
            <button className="btn btn-primary">Go to other page &gt;&gt;</button>
          </Link>
        </div>
      </Layout>
    </div>
  )
}
