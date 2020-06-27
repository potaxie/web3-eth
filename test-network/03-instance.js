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

let address = '0x797Ff2e41b64eD1adfc84cA98afeD00813Dd051D' //此处是合约地址

//此处abi已经json对象，不需要进行parse动作
let contractInstance = new web3.eth.Contract(abi, address)
console.log('address__________', contractInstance.options.address)
module.exports = contractInstance
