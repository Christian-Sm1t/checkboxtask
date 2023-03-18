import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Teddy from '../../../components/Teddy/Teddy'
import { type TeddyProps } from '../../../types/teddy'

describe('Teddy component renders div with 3 div children', () => {
  it('the 3 children are not visible when all props are false', () => {
    const teddyProps: TeddyProps = {
      hat: false,
      pullover: false,
      trousers: false,
    }
    const wrapper = render(<Teddy {...teddyProps} />)
    const childDivs: HTMLCollection = screen.getByTestId('teddybox').children

    Array.from(childDivs).forEach((child) => {
      expect(child).toHaveClass('isInvisible')
    })
    expect(childDivs).toHaveLength(3)

    wrapper.unmount()
  })
  it('only the first child is visible if only hat prop is true', () => {
    const teddyProps: TeddyProps = {
      hat: true,
      pullover: false,
      trousers: false,
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
