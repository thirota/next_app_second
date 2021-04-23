import Header from './header'

export default function Home() {
  let title = "Next.js page"
  let message = "React Next.js sample page."

  return (
    <div>
      <Header title={title}/>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h2 className="my-3">{title}</h2>
        <div className="alert alert-primary text-center">
          <p className="h5">{message}</p>
        </div>
      </div>
    </div>
  )
}
