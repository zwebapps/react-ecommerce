import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productReducer';



export const store = configureStore({
  reducer: combineReducers({
      products: productReducer,
    //   comments: commentsReducer,
    //   users: usersReducer,
    //   products: productsReducer,
    //   user: userReducer,
    //   cart: cartReducer
    }),
  })

  console.log(store.getState())
  
  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch
