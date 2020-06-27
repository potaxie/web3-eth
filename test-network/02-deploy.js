let {bytecode, interface} = require('./01-compile')

//1.引入web3
let Web3 = require('web3')

//引入包
let HDWalletProvider = require('truffle-hdwallet-provider')

//2.new一个web3实例
let web3 = new Web3()

//3.设置metamask Ropsten-network的助记住词，表明花谁的钱
let terms = 'truly state fruit rug decide riot shy lake apple orphan october dinosaur'

//3.设置测试网络 infura
let netIp = 'https://ropsten.infura.io/v3/4c25a49808354c5480f97d4c82117ee4'
let provider = new HDWalletProvider(terms, netIp)
web3.setProvider(provider)
console.log('version:________', web3.version)
console.log('web3-eth.curretProvider_____________', web3.currentProvider)
//1.拼接合约数据
let contract = new web3.eth.Contract(JSON.parse(interface))
let deploy = async () => {
    //获取所有的账户

    let accounts = await web3.eth.getAccounts()
    console.log('accounts____', accounts)
    //执行部署

    let instance = await contract.deploy({
        data: bytecode,//合约的bytecode
        arguments: ['helloworld']//给构造函数传递参数，使用数组
    }).send({
        from: accounts[0],
        gas: '3000000',
        gasPrice: '1',
    })

    console.log('instance_address_____', instance.options.address)
}

deploy()