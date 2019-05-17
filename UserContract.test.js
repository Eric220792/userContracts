const assert=require('assert');
const Web3=new Web3=require('web3');
const provider=new Web3.provider.HttpProvider("HTTP://127.0.0.1:7545");
const Web3=new Web3(provider);
const {interface,bytecode}=require ('../scripts/compile');

let accounts;
let userContracts;

beforeEach (async () => {
    accounts=await Web3.eth.getAccounts();
    userContracts=await new Web3.eth.Contract(JSON.parse(interface))
    .deploy({data:bytecode})
    .send({from:accounts[0],gas:'1000000'});
});

describe ('The userContracts',async()=>{
    it('should deploy',()=>{
        console.log(userContract.options.address);
        assert.ok(userContract.options.address);
    });
})