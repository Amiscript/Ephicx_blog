import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    user: null,
    loading: false,
    error: null,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signinStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signinSuccess: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.error = null;
        },
        signinFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const { signinStart, signinSuccess, signinFailure } = userSlice.actions;
export default userSlice.reducer;
