// drink.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IDrink extends Document {
  product: string;
  price: number;
  ice?: string;
  sugar?: string;
  toppings?: string[];
  createdAt?: Date;
}

const drinkSchema: Schema = new mongoose.Schema<IDrink>({
  product: {
    type: String,
    required: [true, '產品名稱未填寫'],
  },
  price: {
    type: Number,
    required: [true, '價錢未填寫'],
  },
  ice: {
    type: String,
    default: '正常冰',
  },
  sugar: {
    type: String,
    default: '全糖',
  },
  toppings: [
    {
      type: String,
      enum: ['珍珠', '椰果', '粉條'],
      default: '',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
    select: false,
  },
}, {
  versionKey: false,
});

export const Drink = mongoose.model<IDrink>('Drink', drinkSchema);