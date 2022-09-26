import { configureStore } from "@reduxjs/toolkit";

import posts, { setPost } from "./PostsSlice";

export const store = configureStore({ reducer: posts });

store.dispatch(setPost({ title: "Hello", content: "World" }));