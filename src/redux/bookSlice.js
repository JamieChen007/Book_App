import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fakeApi from "../fakeApi";

//async thunk action
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const data = await fakeApi.fetchBooks();
    return data;
  } catch (error) {
    console.error("Failed to fetch books", error);
    throw error;
  }
});

const bookSlice = createSlice({
  name: "books",
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push({ id: Date.now(), ...action.payload });
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => {
        return [...action.payload];
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        console.error("failed to fetch books", action.error);
      });
  },
});

export const { addBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
