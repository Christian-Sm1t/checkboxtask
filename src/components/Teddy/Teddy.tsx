import React from 'react'
import { type TeddyProps } from '../../types/teddy'
import './teddy.css'

function Teddy(props: TeddyProps) {
  return (
    <div id="teddybox">
      <div id="hat"></div>
      <div id="pullover"></div>
      <div id="trousers"></div>
    </div>
  )
}

export default Teddy
