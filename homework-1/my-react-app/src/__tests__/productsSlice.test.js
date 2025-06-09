import reducer, { fetchProducts } from './productsSlice';
/* global describe, expect, it */

describe('productsSlice reducer', () => {
  const initialState = {
    items: [],
    status: 'idle',
    error: null,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  it('should handle fetchProducts.pending', () => {
    const nextState = reducer(initialState, fetchProducts.pending());
    expect(nextState.status).toBe('loading');
    expect(nextState.items).toEqual([]);
  });

  it('should handle fetchProducts.fulfilled', () => {
    const mockData = [{ id: 1, name: 'Product 1' }];
    const nextState = reducer(initialState, fetchProducts.fulfilled(mockData));
    expect(nextState.status).toBe('succeeded');
    expect(nextState.items).toEqual(mockData);
  });

  it('should handle fetchProducts.rejected', () => {
    const error = { message: 'Failed to load' };
    const nextState = reducer(initialState, fetchProducts.rejected(null, null, error));
    expect(nextState.status).toBe('failed');
    expect(nextState.error).toBe(undefined); 
  });
});
