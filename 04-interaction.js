//1.导入合约实例
let instance = require('./03-instance')
const from = '0xd4DB91aCBB5Be2a42276567c7473857e14888B53'

//异步调用，返回值是一个promise
//2.读取数据
// instance.methods.getValue().call().then(data=>{
//     console.log('data_________',data)
//     //3.写入数据
//     instance.methods.setValue('Hello HangTou').send({
//         from:from,
//         value:0,
//     }).then(res=>{
//         console.log('res:____',res)
//
//         //4.读取数据
//         instance.methods.getValue().call().then(data => {
//             console.log("data2:___",data)
//         })
//
//     })
// })


//整体封装成函数
//web3和区块链交互的返回值都是promise，可以直接使用async

let test = async () => {

    try {
        let y1 = await instance.methods.getValue().call()

        let res = await instance.methods.setValue('Hello HangTou').send({
            from: from,
            value: 0,
        })

        console.log('res:', res)
        let v2 = await instance.methods.getValue().call()

        console.log('v2:', v2)
    } catch (e) {
        console.log(e)
    }
}

test()





