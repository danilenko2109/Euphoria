import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../components/Modal/Modal';
import renderer from 'react-test-renderer'; 

/* global describe, test, expect, jest */


describe('Modal component', () => {
  test('renders children and handles onClose', () => {
    const onCloseMock = jest.fn();

    render(
      <Modal onClose={onCloseMock}>
        <div>Modal Content</div>
      </Modal>
    );

    expect(screen.getByText('Modal Content')).toBeInTheDocument();

    // Assuming ModalWrapper has data-testid="modal-overlay"
    const overlay = screen.getByTestId('modal-overlay');
    fireEvent.click(overlay);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('matches snapshot', () => {
    const tree = renderer
      .create(
        <Modal onClose={() => {}}>
          <div>Snapshot Modal</div>
        </Modal>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
