import Layout from '../components/layout'
import Link from 'next/link'

export default function Other() {
  return (
    <div>
      <Layout header="Next.js" title="Other page">
        <div className="card p-4 text-center">
          <h5 className="my-3">This is other page.</h5>
          <Link href="/">
            <button className="btn btn-primary">&lt;&lt; Back to index page</button>
          </Link>
        </div>
      </Layout>
    </div>
  )
}
