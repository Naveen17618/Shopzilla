import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js'; // OK here
import adminRoutes from './routes/adminRoutes.js';


dotenv.config();
connectDB();

const app = express(); // ✅ Declare app FIRST
app.use('/api/admin', adminRoutes);

app.use(cors());
app.use(express.json());

// ✅ Use routes AFTER app is initialized
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.send('ShopZilla API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
