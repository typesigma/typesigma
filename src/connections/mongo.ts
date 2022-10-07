import { MongoClient, Db } from "mongodb";

const connectToMongoDB = async (connectionURL: string, DbName: string) => {
  const client: MongoClient = new MongoClient(connectionURL);
  await client.connect();
  const db: Db = client.db(DbName);
  console.log(`Connected to MongoDB: ${db.databaseName}`);
};

export default connectToMongoDB;
