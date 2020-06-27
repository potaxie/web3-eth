//获取合约实例，导出去
//1.引入web3
let Web3 = require('web3')

//2.new一个web3实例
let web3 = new Web3()

//3.设置网络
web3.setProvider('http://localhost:7545')


let abi = [{
    "constant": true,
    "inputs": [],
    "name": "getValue",
    "outputs": [{"name": "", "type": "string"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}, {
    "constant": false,
    "inputs": [{"name": "_str", "type": "string"}],
    "name": "setValue",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"name": "_str", "type": "string"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
}]
let address = '0x7a0402FDB3de50eBEBe77F0ff72A6b7526e92447' //此处是合约地址
//此处abi已经json对象，不需要进行parse动作
let contractInstance = new web3.eth.Contract(abi, address)
console.log('address__________', contractInstance.options.address)
module.exports = contractInstance
