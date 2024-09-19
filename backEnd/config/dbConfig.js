import mongoose from 'mongoose';
const connectdb = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.CONNECTION_STRING}`)
        console.log('Mongodb connected',connectionInstance);
        
    } catch (error) {
         console.log('error on connection');
         process.exit(1)
    }
}

export {connectdb}