import { describe, vi, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { type CheckboxProps } from '../../../types/checkbox'
import CheckboxGroup from '../../../components/Checkbox/CheckboxGroup'

describe('Multiple Checkboxes and a Teddy', () => {
  it('renders 4 Checkboxes and a Teddy Component', () => {
    const wrapper = render(<CheckboxGroup />)
    const checkboxes: HTMLInputElement[] = screen.getAllByRole('checkbox')
    const teddy = screen.getByTestId('teddybox')

    expect(checkboxes).toHaveLength(4)
    expect(teddy).toBeInTheDocument()

    wrapper.unmount()
  })
  it('select all is true when all checkboxes except the first one are clicked', () => {
    const wrapper = render(<CheckboxGroup />)
    const checkboxes: HTMLInputElement[] = screen.getAllByRole('checkbox')
    checkboxes.slice(1).forEach((checkbox) => {
      fireEvent.click(checkbox)
    })
    expect(checkboxes[0].checked).toBe(true)

    wrapper.unmount()
  })
})
