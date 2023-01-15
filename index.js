const { sha256 } = require("crypto.js");

class Block {
    constructor(timestamp, data) {
        this.index = 0;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = "0";
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    calculateHash() {
        return sha256(this.indexx + this.previousHash + this.timestamp + this.data + this.nonce).toString();
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
    adBlock(newBlock) {
        newBlock.previoushash = this.latestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
    checkValid() {
        for (let i = 1; i < this.chain.length; i++) {
            // const curr;
        }
    }  
}
