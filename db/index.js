const { MongoClient } = require('mongodb');

const dbConnection = async () => {
    try {
        const client = await new MongoClient("mongodb+srv://najmy:Smandak12@cluster0.xxlfbbe.mongodb.net").connect();
        const db = client.db('week-15');
        const collection = db.collection('Books');
        return { db, collection };
    } catch (error) {
        console.log(error, "<=================== error ==================");
        throw new Error("Database connection error");
    }
}

module.exports = dbConnection;
