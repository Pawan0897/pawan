// import { configureStore } from "@reduxjs/toolkit";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistReducer,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import  Mode  from "../Redux/Reducer";
// import persistStore from "redux-persist/es/persistStore";
// const store = configureStore({
//   reducer: {
//     user: persistReducer(
//       {
//         key: "mode",
//         storage,
//       },
//       Mode
//     ),
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

import { configureStore } from "@reduxjs/toolkit";
import ModeReducer from "../Redux/Reducer";

// const persist = persistStore(store);

// export { persist, store };

// *********************** simple reducer

export const store = configureStore({
  reducer: {
    user: ModeReducer,
  },
});
