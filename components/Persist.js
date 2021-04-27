import React, { useState } from 'react'

function usePersist(ky, initVal) {
    console.log("usePersist start")
    const key = "hooks: " + ky

    const value = ()=> {
        console.log("value start")
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initVal
        } catch (err) {
            console.log(err)
            return initVal
        }
    }

    const setValue = (val)=> {
        console.log("setValue start")
        try {
            setSavedValue(val)
            window.localStorage.setItem(key, JSON.stringify(val))
        } catch (err) {
            console.log(err)
        }
    }

    // XXX なぜステートが必要なん？永続化していればメモリ上には不要では？
    // XXX ステートの初期値に関数を設定なんてできるん？？
    console.log("useState before")
    const [savedValue, setSavedValue] = useState(value)
    console.log("useState after")

    return [savedValue, setValue]
}

export default usePersist
