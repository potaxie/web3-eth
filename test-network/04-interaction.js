//引入包
let Web3 =require('web3')
let HDWalletProvider = require('truffle-hdwallet-provider')

//2.new一个web3实例
let web3 = new Web3()

//3.设置metamask Ropsten-network的助记住词，表明花谁的钱
let terms = 'truly state fruit rug decide riot shy lake apple orphan october dinosaur'

//3.设置测试网络 infura
let netIp = 'https://ropsten.infura.io/v3/4c25a49808354c5480f97d4c82117ee4'
let provider = new HDWalletProvider(terms, netIp)
web3.setProvider(provider)


//1.导入合约实例
let instance = require('./03-instance')
// const from = '0xd4DB91aCBB5Be2a42276567c7473857e14888B53'

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
        //获取当前区块链的对应助记词的账户地址
        let accounts = await web3.eth.getAccounts()
        let from = accounts[0]
        let y1 = await instance.methods.getValue().call()

        let res = await instance.methods.setValue('Hello HangTou').send({
            from: from,
            gas:'3000000',
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





