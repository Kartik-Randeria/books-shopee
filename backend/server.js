import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import dotenv from 'dotenv';
import uploadRouter from './routers/uploadRouter.js';
import path from 'path';

dotenv.config();

// create a basic express server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// connect to mongoDB database using mongoose
// connect accepts two paramters: adrees or database or mongoDB uri and options 
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/books-shopee', {
  useNewUrlParser: true,  // get rid of depricated warnings
  useUnifiedTopology: true,
  useCreateIndex: true, 
});


// Routes of backend

app.use('/api/uploads', uploadRouter);

// send data from mongoDB to frontend
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);  
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
});

// for image upload
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Handler accepts request and response object
app.get('/', (req, res) => {
  res.send("Server is ready");
});

//error handler
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

// Define port by environment variable and by default server is running at port 5000
const port = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Serve at http://localhost:${port}`);
});
