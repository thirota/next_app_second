import apidata from '../../../components/data'

export default function handler(req, res) {

    console.log("size of req.query.params: " + req.query.params.length)
    console.log("body of req.query.params: " + req.query.params)

    // way 1
    // const {
    //     query: {params: [id, item]}
    // } = req

    // way 2
    const id = req.query.params[0];
    const item = req.query.params[1];
    
    const result = {id: id, item: apidata[id][item]}

    res.json(result)
}