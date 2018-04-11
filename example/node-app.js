#!/usr/bin/env node

var Web3 = require('../index.js');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

var coinbase = web3.okc.coinbase;
console.log(coinbase);

var balance = web3.okc.getBalance(coinbase);
console.log(balance.toString(10));

