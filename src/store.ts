import { configureStore } from '@reduxjs/toolkit';
import movieAppReducer from './slice/movieAppSlice';

const store = configureStore({
    reducer: {
        movieApp: movieAppReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;