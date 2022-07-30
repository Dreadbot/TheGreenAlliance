import { MongoClient, ServerApiVersion } from 'mongodb';
import * as rl from 'readline';
import * as fs from 'fs/promises';
import * as path from 'path';
import { resolveTypeReferenceDirective } from 'typescript';

let rli = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let uri = new Promise(resolve => {
  rli.question('Username: ', input => { resolve(input) });
})
  .then(username => {
    return new Promise(resolve => {
      rli.question('Password: ', input => { resolve(input) });
    })
      .then(password => {
        return `mongodb+srv://${username}:${password}@thegreenalliance.5xwjk.mongodb.net/?retryWrites=true&w=majority`;
      })
  });

let filepath: Promise<string> = uri.then(value => {
  return new Promise(resolve => {
    rli.question('Filepath: ', input => resolve(input));
  })
})

let title: Promise<string> = filepath.then(value => {
  return new Promise(resolve => {
    rli.question('Title: ', input => resolve(input));
  })
});

let content = title.then(value => {
  new Promise(async (resolve) => {
    let file = fs.open(path.join(process.cwd(), await filepath));
    return (await file).read();
  })
});

async function main() {
  let content = fs.readFile(path.join(__dirname, await filepath), {encoding: 'utf-8'});

  const client = new MongoClient(await uri, { serverApi: ServerApiVersion.v1 });

  client.connect(async (err) => {
    const collection = client.db("thegreenalliance").collection("articles");

    await collection.insertOne({
      title: await title,
      text: await content,
    }).then(_ => {client.close(); process.exit(0)});
  });
}

main();
