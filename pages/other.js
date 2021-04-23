import Header from './header'
import Link from 'next/link'

export default function Home() {
  let title = "Other"

  return (
    <div>
      <Header title={title}/>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h2 className="my-3">{title}</h2>
        <div className="alert alert-primary text-center">
          <p className="h5">もうひとつのページだじょ</p>
          <Link href="/">
            <a>&lt;&lt; Back to index page</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
