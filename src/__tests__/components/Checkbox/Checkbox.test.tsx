import { describe, vi, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { type CheckboxProps } from '../../../types/checkbox'
import Checkbox from '../../../components/Checkbox/Checkbox'

describe('one Checkbox', () => {
  const onChange = vi.fn()
  const checkBoxProps: CheckboxProps = {
    id: '1',
    name: 'test-1',
    isChecked: false,
    onChange,
  }

  it('Renders a Checkbox with Label', () => {
    const wrapper = render(<Checkbox {...checkBoxProps} />)
    const checkbox: HTMLInputElement = screen.getByLabelText(checkBoxProps.name)
    fireEvent.click(checkbox)

    expect(checkbox).toBeInTheDocument()
    expect(checkbox.getAttribute('id')).toBe(checkBoxProps.id)
    expect(checkbox.getAttribute('type')).toBe('checkbox')
    expect(checkbox.checked).toBe(checkBoxProps.isChecked)
    expect(onChange).toHaveBeenCalledTimes(1)

    wrapper.unmount()
  })
  it('Renders unchecked checkbox when isChecked is false', () => {
    const falseCheckboxProps: CheckboxProps = {
      ...checkBoxProps,
      isChecked: false,
    }
    const wrapper = render(<Checkbox {...falseCheckboxProps} />)
    const checkbox: HTMLInputElement = screen.getByLabelText(checkBoxProps.name)

    expect(checkbox.checked).toBe(false)

    wrapper.unmount()
  })
  it('Renders checked checkbox when isChecked is true', () => {
    const trueCheckboxProps: CheckboxProps = {
      ...checkBoxProps,
      isChecked: true,
    }
    const wrapper = render(<Checkbox {...trueCheckboxProps} />)
    const checkbox: HTMLInputElement = screen.getByLabelText(checkBoxProps.name)

    expect(checkbox.checked).toBe(true)

    wrapper.unmount()
  })
})
