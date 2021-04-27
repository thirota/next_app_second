export default {
    'func': {
        'tax': {
            'caption':'消費税10%を計算します',
            'function':'(...param)=>{return Math.floor(param[0]*1.1)}'
        },
        'tax2': {
            'caption':'消費税8%を計算します',
            'function':'(...param)=>{return Math.floor(param[0]*1.08)}'
        },
        'total': {
            'caption':'カンマ区切りの数字の合計を計算します',
            'function':`(...param)=>{
                let re=0;
                for(let i in param) {
                    re += param[i]*1
                }
                return re
            }`
        },
        'factorial': {
            'caption':'0から入力値までの合計を計算します',
            'function':`(...param)=>{
                let re=0;
                for(let i = 0; i <= param[0]; i++) {
                    re += i
                }
                return re
            }`
        },
    }
}