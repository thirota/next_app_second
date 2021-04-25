import {useState} from 'react'
import Layout from '../components/layout'
import useSWR from 'swr'

export default function Home() {
  console.log("Home start")

  const [address, setAddress] = useState('/api/hello')
  const {data, err} = useSWR(address)

  console.log("address: " + address)

  const onChange = (e)=> {
    //setAddress('/api/hello?id=' + e.target.value)
    setAddress('/api/hello/' + e.target.value)
  }

  return (
    <div>
      <Layout header="Next.js" title="Top page">
        <div className="alert alert-primary text-center">
          <h5 className="mb-4">
            {JSON.stringify(data)}
          </h5>
          <input type="number" className="form-control" onChange={onChange}/>
        </div>
      </Layout>
    </div>
  )
}
