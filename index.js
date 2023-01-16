const sha256 = require('crypto-js/sha256');
const hmacSHA512 = require('crypto-js/hmac-sha512');
const Base64 = require('crypto-js/enc-base64');
var CryptoJS = require("crypto-js");

class Block {
    constructor(index, timestamp, data, previousHash = "0", ) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = Math.random() * (10 - 1 + 1) + 1;
    }

    calculateHash() {
        return sha256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }

    mineBlock(difficulty) {

    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesis()];
    }

    createGenesis() {
        return new Block(0, "01/01/2023", "Genesis Block", "0")
    }

    latestBlock() {
        return this.chain[this.chain.length - 1]
    }
    addBlock(newBlock) {
        newBlock.previoushash = this.latestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

}

let yaadi = new Blockchain();
yaadi.addBlock(new Block(1, "10/07/2017", {amount: 4}));
yaadi.addBlock(new Block(2, "10/07/2017", { amount: 10 }));
yaadi.addBlock(new Block(3, "10/07/2017", { amount: 7 }));

console.log(JSON.stringify(yaadi, null, 4));
