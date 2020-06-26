let {bytecode, interface} = require('./01-compile')


// console.log('bytecode_____',bytecode)
// console.log('interface____',interface)


//1.引入web3

let Web3 = require('web3')

//2.new一个web3实例
let web3 = new Web3()

//3.设置网络
web3.setProvider('http://localhost:7545')

console.log('version:________', web3.version)
console.log('web3-eth.curretProvider_____________', web3.currentProvider)


//1.拼接合约数据interface
let contract = new web3.eth.Contract(JSON.parse(interface))
//2.拼接bytecode
contract.deploy({
    data: bytecode,//合约的bytecode
    arguments: ['helloworld']
})

//3.合约部署