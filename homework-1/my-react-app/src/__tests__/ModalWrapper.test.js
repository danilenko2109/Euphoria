import { render, screen, fireEvent } from '@testing-library/react';
import ModalWrapper from '../components/ModalWrapper/ModalWrapper';
import renderer from 'react-test-renderer'; 

/* global describe, test, expect, jest */



describe('ModalWrapper component', () => {
  test('renders children content', () => {
    render(
      <ModalWrapper onClose={() => {}}>
        <div>Modal content</div>
      </ModalWrapper>
    );

    expect(screen.getByText('Modal content')).toBeInTheDocument();
  });

  test('calls onClose when clicking overlay', () => {
    const onCloseMock = jest.fn();

    render(
      <ModalWrapper onClose={onCloseMock}>
        <div>Modal content</div>
      </ModalWrapper>
    );

    const overlay = screen.getByTestId('modal-overlay');
    fireEvent.click(overlay);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when clicking inside modal content', () => {
    const onCloseMock = jest.fn();

    render(
      <ModalWrapper onClose={onCloseMock}>
        <div>Modal content</div>
      </ModalWrapper>
    );

    const modalInner = screen.getByTestId('modal-inner');
    fireEvent.click(modalInner);

    expect(onCloseMock).not.toHaveBeenCalled();
  });

  test('matches snapshot', () => {
    const tree = renderer
      .create(
        <ModalWrapper onClose={() => {}}>
          <div>Modal content</div>
        </ModalWrapper>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
