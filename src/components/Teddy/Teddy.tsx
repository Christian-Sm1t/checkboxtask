import { type TeddyProps } from '../../types/teddy'
import './teddy.css'

function Teddy(props: TeddyProps) {
  const { hat, pullover, trousers } = props
  return (
    <div id="teddybox" data-testid="teddybox">
      <div id="hat" className={hat ? '' : 'isInvisible'}></div>
      <div id="pullover" className={pullover ? '' : 'isInvisible'}></div>
      <div id="trousers" className={trousers ? '' : 'isInvisible'}></div>
    </div>
  )
}

export default Teddy
