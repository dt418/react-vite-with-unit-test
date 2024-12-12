import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import Avatar from './Avatar';

describe('<Avatar />', () => {
  test('should show avatar with default props', () => {
    render(<Avatar src='/src/images/user/user-01.png' />);

    const avatarTest = screen.getByTestId('avatar');

    expect(avatarTest).toBeInTheDocument();
    expect(avatarTest.children).length(1);
  });
  test('should show avatar with green dot', () => {
    render(<Avatar src='/src/images/user/user-01.png' isPusle />);

    const avatarTest = screen.getByTestId('avatar');

    expect(avatarTest).toBeInTheDocument();
    expect(avatarTest.childNodes[1]).toHaveClass('bg-[#219653]');
  });
  test('should show avatar with gray dot', () => {
    render(<Avatar src='/src/images/user/user-01.png' isPusle color='gray' />);

    const avatarTest = screen.getByTestId('avatar');

    expect(avatarTest).toBeInTheDocument();
    expect(avatarTest.childNodes[1]).toHaveClass('bg-gray');
  });
});
