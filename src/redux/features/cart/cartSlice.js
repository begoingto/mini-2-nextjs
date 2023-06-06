import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [], // array of items in cart
    total: 0 // total price of all items in cart
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const {id, name, price, quantity, image, description} = action.payload
            const existingItem = state.cart.find(item => item.id === id)

            if (existingItem) {
                alert('Item already in cart')
            } else {
                state.cart.push({id, name, price, quantity, image, description})
            }
            state.total += price * quantity

        },
        increaseQuantity(state, action) {
            const { id, price } = action.payload
            const existingItem = state.cart.find(item => item.id === id)

            if (existingItem) {
                existingItem.quantity++
            }
            state.total += price
        },
        decreaseQuantity(state, action) {
            const { id, price } = action.payload
            const existingItem = state.cart.find(item => item.id === id)
            if (existingItem) {
                existingItem.quantity--
            }
            state.total -= price
            // remove item from cart if quantity is 0
            if (existingItem.quantity === 0) {
                state.cart = state.cart.filter(item => item.id !== id)
            }
        }
    }
})

export const { addToCart, decreaseQuantity, increaseQuantity } = cartSlice.actions

// export reducer
export default cartSlice.reducer

// selectors
export const selectCart = state => state.cart.cart
export const selectTotal = state => state.cart.total