import { type TeddyProps } from '../../types/teddy'
import './teddy.css'

function Teddy(props: TeddyProps) {
  const { checkboxes } = props

  function isSelectedByName(name: string): boolean {
    return (
      checkboxes.find((checkbox) => checkbox.name === name)?.selected ?? false
    )
  }

  const isHatSelected = isSelectedByName('hat')
  const isPulloverSelected = isSelectedByName('pullover')
  const isTrousersSelected = isSelectedByName('trousers')

  return (
    <div id="teddybox" data-testid="teddybox">
      <div
        id="hat"
        className={`clothing hat ${isHatSelected ? '' : 'isInvisible'}`}
      ></div>
      <div
        id="pullover"
        className={`clothing pullover ${
          isPulloverSelected ? '' : 'isInvisible'
        }`}
      ></div>
      <div
        id="trousers"
        className={`clothing trousers ${
          isTrousersSelected ? '' : 'isInvisible'
        }`}
      ></div>
    </div>
  )
}

export default Teddy
