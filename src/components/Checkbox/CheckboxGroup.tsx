import React, { useState } from 'react'
import { type CheckboxData } from '../../types/checkbox'

const checkboxes: CheckboxData[] = [
  { id: '1', name: 'hat' },
  { id: '2', name: 'pullover' },
  { id: '3', name: 'trowsers' },
]

function CheckboxGroup() {
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [selected, setSelected] = useState<string[]>([])

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
      <input
        type="checkbox"
        onChange={(e) => {
          handleSelectAll(e)
        }}
      />
      {checkboxes.map((checkbox) => {
        return (
          <input
            key={checkbox.id}
            type="checkbox"
            checked={selected.includes(checkbox.id)}
            onChange={(e) => {
              handleSelect(e, checkbox.id)
            }}
          />
        )
      })}
    </>
  )
}

export default CheckboxGroup
