import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    auth: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action){
            const {email, password} = action.payload
            fetch("http://localhost:8080/api/v1/auth/login",{
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password
                }),
                headers: {
                    'content-type': 'Application/json'
                }
            }).then(res => res.json())
                .then(data => {
                    console.log(data)
                    state.auth = data.data
                    return true
                })
            return false
        }
    }
})

export const { setAuth } = authSlice.actions

export default authSlice.reducer

export const user = state => state.auth.user