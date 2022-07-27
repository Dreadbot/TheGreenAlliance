"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const rl = __importStar(require("readline"));
const fs = __importStar(require("fs/promises"));
const path = __importStar(require("path"));
let rli = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let uri = new Promise(resolve => {
    rli.question('Username: ', input => { resolve(input); });
})
    .then(username => {
    return new Promise(resolve => {
        rli.question('Password: ', input => { resolve(input); });
    })
        .then(password => {
        return `mongodb+srv://${username}:${password}@thegreenalliance.5xwjk.mongodb.net/?retryWrites=true&w=majority`;
    });
});
let filepath = uri.then(value => {
    return new Promise(resolve => {
        rli.question('Filepath: ', input => resolve(input));
    });
});
let title = filepath.then(value => {
    return new Promise(resolve => {
        rli.question('Title: ', input => resolve(input));
    });
});
let content = title.then(value => {
    new Promise(async (resolve) => {
        let file = fs.open(await filepath);
        return (await file).read();
    });
});
async function main() {
    let content = fs.readFile(path.join(__dirname, await filepath), { encoding: 'utf-8' });
    const client = new mongodb_1.MongoClient(await uri, { serverApi: mongodb_1.ServerApiVersion.v1 });
    client.connect(async (err) => {
        const collection = client.db("thegreenalliance").collection("articles");
        await collection.insertOne({
            title: await title,
            text: await content,
        }).then(_ => client.close());
    });
}
main();
