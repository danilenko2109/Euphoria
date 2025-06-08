import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../Modal/Modal.jsx';

describe('Modal component', () => {
  test('renders child content', () => {
    render(
      <Modal onClose={() => {}} className="custom-class">
        <p>Test content</p>
      </Modal>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('calls onClose when ModalWrapper is clicked', () => {
    const onCloseMock = jest.fn();

    render(
      <Modal onClose={onCloseMock} className="custom-class">
        <p>Content</p>
      </Modal>
    );

    // Предположим, что ModalWrapper рендерит div, на котором обрабатывается onClose
    // Найдём ближайший div-обёртку вокруг контента
    const wrapperDiv = screen.getByText('Content').parentElement.parentElement;

    fireEvent.click(wrapperDiv);

    expect(onCloseMock).toHaveBeenCalled();
  });

  test('passes className to ModalWrapper', () => {
    const className = 'custom-modal-class';
    render(
      <Modal onClose={() => {}} className={className}>
        <p>Content</p>
      </Modal>
    );

    const wrapperDiv = screen.getByText('Content').parentElement.parentElement;
    expect(wrapperDiv).toHaveClass(className);
  });
});
