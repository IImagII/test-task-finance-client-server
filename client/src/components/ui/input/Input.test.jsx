import { fireEvent, render, screen } from '@testing-library/react'

import Input from './Input.jsx'

describe('Input', () => {
  const inputProps = {
    type: 'text',
    name: 'test-name',
    containerClassName: 'test-container-class',
    placeholder: 'test-placeholder',
    onChange: jest.fn(),
    error: ''
  }

  it('renders input with correct props', () => {
    render(<Input {...inputProps} />)
    const input = screen.getByPlaceholderText('test-placeholder')

    expect(input).toBeInTheDocument()
    expect(input).toHaveAttribute('type', 'text')
    expect(input).toHaveAttribute('name', 'test-name')
    expect(input.parentElement).toHaveClass('test-container-class')
  })

  it('calls onChange when the input value changes', () => {
    render(<Input {...inputProps} />)
    const input = screen.getByPlaceholderText('test-placeholder')

    fireEvent.change(input, { target: { value: 'new value' } })

    expect(inputProps.onChange).toHaveBeenCalledTimes(1)
    expect(inputProps.onChange).toHaveBeenCalledWith(expect.any(Object))
  })

  it('displays error message when error prop is provided', () => {
    render(<Input {...inputProps} error="test error" />)
    const errorMessage = screen.getByText('test error')

    expect(errorMessage).toBeInTheDocument()
  })
})
