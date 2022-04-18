import { fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';
import useEventListener from '../src';

describe('useEventListener hook testing.', () => {
  it('should trigger keydown event 3 times.', () => {
    const callback = jest.fn();
    renderHook(() => useEventListener('keydown', callback, window));
    userEvent.keyboard('f');
    userEvent.keyboard('o');
    userEvent.keyboard('o');
    expect(callback).toBeCalledTimes(3);
  });

  it('should trigger mouse click event 1 times.', () => {
    const callback = jest.fn();
    renderHook(() => useEventListener('click', callback, window));
    fireEvent.click(window);
    expect(callback).toBeCalledTimes(1);
  });

  it('should trigger focus event 1 times.', () => {
    const callback = jest.fn();
    renderHook(() => useEventListener('focus', callback, window));
    fireEvent.focus(window);
    expect(callback).toBeCalledTimes(1);
  });
});
