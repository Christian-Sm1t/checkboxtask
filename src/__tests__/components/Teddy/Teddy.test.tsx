import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Teddy from '../../../components/Teddy/Teddy'
import { type TeddyProps } from '../../../types/teddy'

describe('Teddy component renders div with 3 div children', () => {
  it('the 3 children are not visible when selected in all checkboxes is false', () => {
    const teddyProps: TeddyProps = {
      checkboxes: [
        { id: '1', name: 'hat', selected: false },
        { id: '2', name: 'pullover', selected: false },
        { id: '3', name: 'trousers', selected: false },
      ],
    }
    const wrapper = render(<Teddy {...teddyProps} />)
    const childDivs: HTMLCollection = screen.getByTestId('teddybox').children

    Array.from(childDivs).forEach((child) => {
      expect(child).toHaveClass('isInvisible')
    })
    expect(childDivs).toHaveLength(3)

    wrapper.unmount()
  })
  it('only the first child is visible if selected is only true for the checkbox with name "hat"', () => {
    const teddyProps: TeddyProps = {
      checkboxes: [
        { id: '1', name: 'hat', selected: true },
        { id: '2', name: 'pullover', selected: false },
        { id: '3', name: 'trousers', selected: false },
      ],
    }
    const wrapper = render(<Teddy {...teddyProps} />)
    const childDivs: HTMLCollection = screen.getByTestId('teddybox').children

    expect(childDivs[0]).not.toHaveClass('isInvisible')
    expect(childDivs[1]).toHaveClass('isInvisible')
    expect(childDivs[2]).toHaveClass('isInvisible')
    expect(childDivs).toHaveLength(3)

    wrapper.unmount()
  })
})
