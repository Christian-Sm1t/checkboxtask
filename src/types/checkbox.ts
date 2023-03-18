import type React from 'react'

export interface CheckboxData {
  id: string
  name: string
}

export interface CheckboxProps extends CheckboxData {
  isChecked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void
}
