import { describe, vi, it } from 'vitest'
import { render } from '@testing-library/react'
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

    wrapper.unmount()
  })
})
