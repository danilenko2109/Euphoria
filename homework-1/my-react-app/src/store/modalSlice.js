import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isImageModalOpen: false,
    isTextModalOpen: false,
  },
  reducers: {
    openImageModal: (state) => {
      state.isImageModalOpen = true;
    },
    closeImageModal: (state) => {
      state.isImageModalOpen = false;
    },
    openTextModal: (state) => {
      state.isTextModalOpen = true;
    },
    closeTextModal: (state) => {
      state.isTextModalOpen = false;
    },
  },
});

export const {
  openImageModal,
  closeImageModal,
  openTextModal,
  closeTextModal,
} = modalSlice.actions;

export default modalSlice.reducer;
