import React, { useEffect, useState } from 'react'
import { type CheckboxData } from '../../types/checkbox'
import Teddy from '../Teddy/Teddy'
import Checkbox from './Checkbox'

const checkboxes: CheckboxData[] = [
  { id: '1', name: 'hat' },
  { id: '2', name: 'pullover' },
  { id: '3', name: 'trousers' },
]

function CheckboxGroup() {
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    setSelectAll(checkboxes.length === selected.length)
  }, [selected])

  function handleSelectAll(e: React.ChangeEvent<HTMLInputElement>): void {
    setSelectAll(e.target.checked)
    setSelected(
      e.target.checked ? checkboxes.map((checkbox) => checkbox.id) : []
    )
  }

  function handleSelect(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ): void {
    setSelected((prevSelected) => {
      if (e.target.checked) {
        return [...prevSelected, id]
      } else {
        return prevSelected.filter((item) => item !== id)
      }
    })
  }

  return (
    <>
      <Checkbox
        isChecked={selectAll}
        name={`${selectAll ? 'uncheck ' : 'check '}all`}
        id="checkAll"
        onChange={(e) => {
          handleSelectAll(e)
        }}
      />

      {checkboxes.map((checkbox) => {
        return (
          <Checkbox
            key={checkbox.id}
            id={checkbox.id}
            name={checkbox.name}
            isChecked={selected.includes(checkbox.id)}
            onChange={(e) => {
              handleSelect(e, checkbox.id)
            }}
          />
        )
      })}
      <Teddy
        hat={selected.includes('1')}
        pullover={selected.includes('2')}
        trousers={selected.includes('3')}
      />
    </>
  )
}

export default CheckboxGroup
