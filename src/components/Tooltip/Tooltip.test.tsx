import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import Tooltip from './Tooltip';

describe('Tooltip component', () => {
  test('renders the opener element', () => {
    const renderOpener = vi.fn(() => <div>Opener</div>);
    const { getByText } = render(<Tooltip renderOpener={renderOpener} />);
    expect(getByText('Opener')).toBeInTheDocument();
  });

  test('renders the tooltip when open', () => {
    const renderOpener = vi.fn(() => <div>Opener</div>);
    const content = <div>Tooltip content</div>;
    const { getByText } = render(
      <Tooltip renderOpener={renderOpener} content={content} />,
    );
    fireEvent.mouseOver(getByText('Opener'));
    waitFor(() => expect(getByText('Tooltip content')).toBeInTheDocument());
  });

  test('renders the content of the tooltip', () => {
    const renderOpener = vi.fn(() => <div>Opener</div>);
    const content = <div>Tooltip content</div>;
    const { getByText } = render(
      <Tooltip renderOpener={renderOpener} content={content} />,
    );
    fireEvent.mouseOver(getByText('Opener'));
    waitFor(() => expect(getByText('Tooltip content')).toBeInTheDocument());
  });

  test('handles hover events on the opener element', () => {
    const renderOpener = vi.fn(() => <div>Opener</div>);
    const content = <div>Tooltip content</div>;
    const { getByText } = render(
      <Tooltip renderOpener={renderOpener} content={content} />,
    );
    fireEvent.mouseOver(getByText('Opener'));
    waitFor(() => expect(getByText('Tooltip content')).toBeInTheDocument());
  });

  test('handles focus events on the opener element', () => {
    const renderOpener = vi.fn(() => <div>Opener</div>);
    const content = <div>Tooltip content</div>;
    const { getByText } = render(
      <Tooltip renderOpener={renderOpener} content={content} />,
    );
    fireEvent.focus(getByText('Opener'));
    waitFor(() => expect(getByText('Tooltip content')).toBeInTheDocument());
  });

  test('handles dismiss events on the opener element', () => {
    const renderOpener = vi.fn(() => <div>Opener</div>);
    const content = <div>Tooltip content</div>;
    const { getByText } = render(
      <Tooltip renderOpener={renderOpener} content={content} />,
    );
    fireEvent.mouseOver(getByText('Opener'));
    waitFor(() => expect(getByText('Tooltip content')).toBeInTheDocument());
    fireEvent.mouseOut(getByText('Opener'));
    waitFor(() => expect(getByText('Tooltip content')).not.toBeInTheDocument());
  });
});
