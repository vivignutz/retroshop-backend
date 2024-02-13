// dbConnect.js
import mongoose from 'mongoose';

async function connectToDatabase() {
    try {
        const connectionString = "mongodb+srv://admin:admin2469@cluster0.kpi7bko.mongodb.net/retroshop?retryWrites=true&w=majority";
        if (!connectionString) {
            throw new Error('The DB_CONNECTION_STRING environment variable is not defined.');
        }
        
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        console.log('Connected to the database successfully!');
        return mongoose.connection;
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        process.exit(1);
    }
}

export default connectToDatabase;