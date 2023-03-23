import React, { useEffect, useState } from 'react'
import { type CheckboxState } from '../../types/checkbox'
import Teddy from '../Teddy/Teddy'
import Checkbox from './Checkbox'

function CheckboxGroup() {
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const [checkboxList, setCheckboxList] = useState<CheckboxState[]>([
    { id: '1', name: 'hat', selected: false },
    { id: '2', name: 'pullover', selected: false },
    { id: '3', name: 'trousers', selected: false },
  ])

  useEffect(() => {
    const countSelected = checkboxList.filter((checkbox) => {
      return checkbox.selected
    })
    setSelectAll(countSelected.length === checkboxList.length)
  }, [checkboxList])

  function handleChangeAllCheckboxes(
    e: React.ChangeEvent<HTMLInputElement>
  ): void {
    const checked = e.target.checked
    setSelectAll(checked)
    setCheckboxList((prevCheckboxStates) =>
      prevCheckboxStates.map((checkbox) => ({
        ...checkbox,
        selected: checked,
      }))
    )
  }

  function handleChangeCheckbox(
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ): void {
    const checked = e.target.checked
    setCheckboxList((prevCheckboxStates) => {
      return prevCheckboxStates.map((checkbox) => {
        if (checkbox.id === id) {
          return {
            ...checkbox,
            selected: checked,
          }
        }
        return checkbox
      })
    })
  }

  return (
    <>
      <Checkbox
        isChecked={selectAll}
        name={`${selectAll ? 'uncheck ' : 'check '}all`}
        id="checkAll"
        onChange={(e) => {
          handleChangeAllCheckboxes(e)
        }}
      />

      {checkboxList.map((checkbox) => {
        return (
          <Checkbox
            key={checkbox.id}
            id={checkbox.id}
            name={checkbox.name}
            isChecked={checkbox.selected}
            onChange={(e) => {
              handleChangeCheckbox(e, checkbox.id)
            }}
          />
        )
      })}
      <Teddy checkboxes={checkboxList} />
    </>
  )
}

export default CheckboxGroup
