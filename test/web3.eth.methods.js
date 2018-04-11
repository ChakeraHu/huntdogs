var chai = require('chai');
var assert = chai.assert; 
var Web3 = require('../index.js');
var web3 = new Web3();
var u = require('./helpers/test.utils.js');

describe('web3.okc', function() {
    describe('methods', function() {
        u.methodExists(web3.okc, 'getBalance');
        u.methodExists(web3.okc, 'getStorageAt');
        u.methodExists(web3.okc, 'getTransactionCount');
        u.methodExists(web3.okc, 'getCode');
        u.methodExists(web3.okc, 'sendTransaction');
        u.methodExists(web3.okc, 'call');
        u.methodExists(web3.okc, 'getBlock');
        u.methodExists(web3.okc, 'getTransaction');
        u.methodExists(web3.okc, 'getUncle');
        u.methodExists(web3.okc, 'getCompilers');
        u.methodExists(web3.okc.compile, 'lll');
        u.methodExists(web3.okc.compile, 'solidity');
        u.methodExists(web3.okc.compile, 'serpent');
        u.methodExists(web3.okc, 'getBlockTransactionCount');
        u.methodExists(web3.okc, 'getBlockUncleCount');
        u.methodExists(web3.okc, 'filter');
        u.methodExists(web3.okc, 'contract');

        u.propertyExists(web3.okc, 'coinbase');
        u.propertyExists(web3.okc, 'mining');
        u.propertyExists(web3.okc, 'gasPrice');
        u.propertyExists(web3.okc, 'accounts');
        u.propertyExists(web3.okc, 'defaultBlock');
        u.propertyExists(web3.okc, 'blockNumber');
        u.propertyExists(web3.okc, 'protocolVersion');
    });
});

