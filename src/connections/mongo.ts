import { MongoClient, Db } from "mongodb";

const connectToMongoDB = async (connection: string) => {
  const dashIndex = connection.indexOf("/", 11); // 11 to skip the / in "mongodb://"
  const connectionURL = connection.slice(0, dashIndex);
  const DBName = connection.slice(dashIndex + 1);
  const client: MongoClient = new MongoClient(connectionURL);
  await client.connect();
  const db: Db = client.db(DBName);
  console.log(`Connected to MongoDB: ${db.databaseName}`);
};

export default connectToMongoDB;
