// eslint-disable-next-line import/no-unresolved
import { renderHook } from '@testing-library/react-hooks'

import useDebounce from './useDebouce'

describe('useDebounce', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should return the initial value synchronously', () => {
    const value = 'test value'
    const { result } = renderHook(() => useDebounce(value, 500))
    expect(result.current).toEqual(value)
  })

  it('should return the updated value after the delay', () => {
    const value = 'test value'
    const delay = 500
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      { initialProps: { value, delay } }
    )

    expect(result.current).toEqual(value)

    const updatedValue = 'updated value'
    rerender({ value: updatedValue, delay })

    jest.advanceTimersByTime(delay)

    expect(result.current).toEqual(updatedValue)
  })
})
