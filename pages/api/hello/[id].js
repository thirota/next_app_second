import apidata from '../../../components/data'

export default function handler(req, res) {

    //You can use both way.
    //const id = req.query.id
    const { query: {id} } = req

    res.json(apidata[id])
}