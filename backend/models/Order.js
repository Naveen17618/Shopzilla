import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  items: [
    {
      _id: String,
      name: String,
      image: String,
      price: Number,
      qty: Number,
    },
  ],
  totalAmount: Number,
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);
