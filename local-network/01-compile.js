//导入solc编译器
var solc = require('solc')

//读取合约
let fs = require('fs')
let sourceCode = fs.readFileSync('./contracts/SimpleStorage.sol', 'utf-8')


let output = solc.compile(sourceCode, 1)
console.log('output:', output)

console.log('abi:______',output['contracts'][':SimpleStorage']['interface'])

//导出合约
module.exports = output['contracts'][':SimpleStorage']

