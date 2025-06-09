
/* global describe, test, expect, jest */

import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/Button/Button';
import renderer from 'react-test-renderer'; 


describe('Button component', () => {
  test('renders button with children and handles click', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('matches snapshot', () => {
    const tree = renderer.create(<Button>Snapshot Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});