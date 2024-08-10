import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
const base_url = "https://fakestoreapi.com/";

// Define a type for the slice state
export interface Product {
  product_id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  auther: string;
  createdAt: string;
  createdBy: string;
}

// Create the async thunk
export const fetchProducts = createAsyncThunk<Product[]>(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('https://fake-store-api.mock.beeceptor.com/api/products');
    return response.data as Product[];
  }
);

// Now, define your slice to handle the state updates based on the thunk

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [] as Product[],
    status: 'idle',
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch products';
      });
  },
});


export default productsSlice.reducer

