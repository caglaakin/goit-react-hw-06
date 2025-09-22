import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      if (
        action.payload.name.trim() === "" ||
        action.payload.number.trim() === ""
      ) {
        console.log("Please fill in all fields.");
        return;
      }
      state.items.push({
        id: action.payload.id,
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
