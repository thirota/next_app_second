import {useState, useEffect} from 'react'
import Layout from '../../components/layout'
import firebase from 'firebase'
import {useRouter} from 'next/router'
import '../../components/fire'

const db = firebase.firestore()
const auth = firebase.auth()

export default function Info() {
    const [message, setMessage] = useState('adderss info')
    const [comment, setComment] = useState('')
    const [mydata, setMydata] = useState(null)
    const [msgdata, setMsgdata] = useState([])
    const router = useRouter()

    useEffect(()=> {
        if (auth.currentUser === null) {
            router.push('/address')
        }
    }, [])

    const onChangeComment = ((e)=> {
        setComment(e.target.value)
    })

    const doAction = ((e)=> {
        const t = new Date().getTime()
        const to = {
            comment: 'To: ' + comment,
            time: t
        }
        const from = {
            comment: 'From: ' + comment,
            time: t
        }
        // 自分のアドレス内にメッセージを追加
        db.collection('address').doc(auth.currentUser.email)
            .collection('address').doc(router.query.id)
                .collection('message').add(to).then(ref=> {
                    // 相手のアドレス内にメッセージを追加
                    db.collection('address').doc(router.query.id)
                        .collection('address').doc(auth.currentUser.email)
                            .collection('message').add(from).then(ref=> {
                                // 相手のアドレス内のフラグを更新
                                db.collection('address').doc(router.query.id)
                                    .collection('address').doc(auth.currentUser.email).update({flag:true}).then(ref=>{
                                        router.push('/address')
                                    })
                            })
            })
    })

    const goBack = (e)=> {
        router.push('/address')
    }

    useEffect(()=> {
        if (auth.currentUser !== null) {
            // XXX
            // もっとシンプルに書けないの？
            // 3回も collection().doc().collection().doc(id)　ってあほらしい気が・・・
            db.collection('address').doc(auth.currentUser.email)
                .collection('address').doc(router.query.id).get().then((snapshot)=> {
                setMydata(snapshot.data())
            })
            db.collection('address').doc(auth.currentUser.email)
                .collection('address').doc(router.query.id)
                .collection('message').orderBy('time','desc').get().then((snapshot)=> {
                const data = []
                snapshot.forEach((document)=> {
                    data.push(
                        <li className="list-group-item px-3 py-1">
                            {document.data().comment}
                        </li>
                    )
                })
                setMsgdata(data)
            })
            db.collection('address').doc(auth.currentUser.email)
                .collection('address').doc(router.query.id).update({flag:false})
        } else {
            setMessage("no data")
        }
    }, [message])

    return (
        <div>
            <Layout header="Next.js" title="Info and Message">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">{message}</h5>
                    <div className="text-left">
                        <div>
                            <div>Name: {mydata !== null ? mydata.name : ''}</div>
                            <div>Mail: {mydata !== null ? mydata.mail : ''}</div>
                            <div>Tel: {mydata !== null ? mydata.tel : ''}</div>
                            <div>Memo: {mydata !== null ? mydata.memo : ''}</div>
                        </div>
                        <hr/>
                        <div className="form-group">
                            <label>Message:</label>
                            <input type="text" onChange={onChangeComment} className="form-control"/>
                        </div>
                    </div>
                    <button onClick={doAction} className="btn btn-primary">Send message</button>
                    <button onClick={goBack} className="btn">Go back</button>
                </div>
                <ul className="list-group">
                    {msgdata}
                </ul>
            </Layout>
        </div>
    )
}