import {BASE_URL} from '@/redux/api'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    products: [],
    status: 'idle', // idle, loading, succeeded, failed
    error: null
}



export const fetchProducts = createAsyncThunk('products/fetchProducts', async ({limit, offset}) => {
    const response = await fetch(`${BASE_URL}/products?limit=${limit}&offset=${offset}`)
    const data = await response.json()
    return data
})


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // right now we don't have any actions because we're using createAsyncThunk
    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})
// create Async Thunk for fetching products with limit and offset


// export actions
export const { } = productSlice.actions

// export reducer
export default productSlice.reducer

// export selectors
export const selectAllProducts = state => state.products.products
export const selectProductById = (state, productId) => state.products.products.find(product => product.id === productId)
export const selectProductStatus = state => state.products.status
export const selectProductError = state => state.products.error
