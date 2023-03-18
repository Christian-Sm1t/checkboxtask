import { type CheckboxProps } from '../../types/checkbox'

function Checkbox(props: CheckboxProps) {
  const { id, name, isChecked, onChange } = props

  return (
    <label htmlFor={id}>
      <input
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={(e) => {
          onChange(e, id)
        }}
      />
      {name}
    </label>
  )
}

export default Checkbox
