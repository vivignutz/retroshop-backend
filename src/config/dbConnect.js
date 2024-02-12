import mongoose from 'mongoose';

async function connectToDatabase() {
    const connectionString = "mongodb+srv://admin:admin2469@cluster0.kpi7bko.mongodb.net/retroshop?retryWrites=true&w=majority";
    if (!connectionString) {
        throw new Error('The DB_CONNECTION_STRING environment variable is not defined.');
    }
    
    await mongoose.connect(connectionString);
    return mongoose.connection;
}

export default connectToDatabase;
