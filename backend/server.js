import express from 'express';
import {notFound,errorHandler} from "./middleware/errorMiddleware.js"
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import productRoutes from "./routes/productRoutes.js"
import  userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"

dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cookieparser middleware
app.use(cookieParser());


app.get('/',(req,res) => {
    res.send('api is ruinning');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders',orderRoutes)

app.get('/api/config/paypal',(req,res) => res.send({
    clientId:process.env.PAYPAL_CLIENT_ID
}));

app.use(notFound);
app.use(errorHandler);
app.listen(port,() => console.log (`Server nis running on port ${port}`))