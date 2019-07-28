// insertMany
MongoClient.connect(url, { useNewUrlParser: true }).then(client => {
    const db = client.db('star-wars');
    const collection = db.collection('characters');
    const documents = [{
      name: 'Jack',
      age: 23
    }, {
      name: 'Kate',
      age: 29
    }];
    return collection.insertMany(documents);
  })
  .then(response => console.log(response))
  .catch(error => console.error(error));


  // bulkWrite with insertOne
MongoClient.connect(url, { useNewUrlParser: true }).then(client => {
    const db = client.db('star-wars');
    const collection = db.collection('characters');
    const documents = [{
      name: 'Jack',
      age: 23
    }, {
      name: 'Kate',
      age: 29
    }];
    return collection.bulkWrite([
      {
        insertOne: {
          document: documents[0]
        }
      },
      {
        insertOne: {
          document: documents[1]
        }
      }
    ]);
  })
  .then(response => console.log(response))
  .catch(error => console.error(error));

  /////////////

  MongoClient.connect(url, { useNewUrlParser: true }).then(client => {
    const db = client.db('star-wars');
    const collection = db.collection('characters');
    const documents = [{
      name: 'Jack',
      age: 23
    }, {
      name: 'Kate',
      age: 29
    }];
    return collection.bulkWrite([
      {
        insertOne: {
          document: documents[0]
        }
      },
      {
        insertOne: {
          document: documents[1]
        }
      },
      {
        updateOne: {
          filter: { name: "Kate" },
          update: { $set: { age: 25 }}
        }
      }
    ]);
  })
  .then(response => console.log(response))
  .catch(error => console.error(error));
  