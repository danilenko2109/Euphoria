import modalReducer, {
  openImageModal,
  closeImageModal,
  openTextModal,
  closeTextModal,
} from './modalSlice';
/* global describe, it, expect */

describe('modalSlice reducer', () => {
  const initialState = {
    isImageModalOpen: false,
    isTextModalOpen: false,
  };

  it('should handle openImageModal', () => {
    const nextState = modalReducer(initialState, openImageModal());
    expect(nextState.isImageModalOpen).toBe(true);
    expect(nextState.isTextModalOpen).toBe(false);
  });

  it('should handle closeImageModal', () => {
    const state = { ...initialState, isImageModalOpen: true };
    const nextState = modalReducer(state, closeImageModal());
    expect(nextState.isImageModalOpen).toBe(false);
  });

  it('should handle openTextModal', () => {
    const nextState = modalReducer(initialState, openTextModal());
    expect(nextState.isTextModalOpen).toBe(true);
    expect(nextState.isImageModalOpen).toBe(false);
  });

  it('should handle closeTextModal', () => {
    const state = { ...initialState, isTextModalOpen: true };
    const nextState = modalReducer(state, closeTextModal());
    expect(nextState.isTextModalOpen).toBe(false);
  });
});
