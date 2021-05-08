import {useState,useEffect} from 'react'
import Layout from '../../components/layout'
import {Router, useRouter} from 'next/router'
import firebase from 'firebase'
import '../../components/fire'

const db = firebase.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

auth.signOut()

export default function Index() {
    let addresses = []
    const [user, setUser] = useState(null)
    const [data, setData] = useState(addresses)
    const [message, setMessage] = useState('please login...')
    const router = useRouter()

    const login = ()=> {
        auth.signInWithPopup(provider).then(result=> {
            setUser(result.user.displayName)
            setMessage('logined: ' + result.user.displayName)
        }).catch((error)=> {
            setUser('NONE')
            setMessage('not logined.')
        })
    }

    const logout = ()=> {
        auth.signOut()
        setUser(null)
        addresses = []
        setMessage('logout...')
    }

    const doLogin = (e)=> {
        if (auth.currentUser === null) {
            login()
        } else {
            logout()
        }
    }

    const doAdd = (e)=> {
        router.push('/address/add')
    }

    const doLink = (e)=> {
        const id = e.target.id
        router.push('/address/info?id=' + id)
    }

    useEffect(()=> {
        if (auth.currentUser !== null) {
            setUser(auth.currentUser.email)
            setMessage(auth.currentUser.displayName + ' さんの登録アドレス')
            db.collection('address').doc(auth.currentUser.email).collection('address').get().then((snapshot)=> {
                console.log('address get success')
                snapshot.forEach((document)=> {
                    console.log('document: ' + document)
                    const doc = document.data()
                    addresses.push(
                        <li className="list-group-item list-group-item-action p-1" onClick={doLink} id={document.id}>
                            {doc.flag ? '✔︎' : ''}{doc.name} ({doc.mail})
                        </li>
                    )
                })
                setData(addresses)
            })
        } else {
            addresses.push(
                <li key="1">can't get data.</li>
            )
        }
    }, [message])

    return (
        <div>
            <Layout header="Next.js" title="Address book">
                <div className="alert alert-primary text-center">
                    <h6 className="text-right" onClick={doLogin}>LOGINED: {user}</h6>
                    <h5 className="mb-4">{message}</h5>
                    <ul className="list-group">
                        {data}
                    </ul>
                    <hr/>
                    <button className="btn btn-primary" onClick={doAdd}>Add address</button>
                </div>
            </Layout>
        </div>
    )
}