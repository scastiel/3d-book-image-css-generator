import React from 'react'

export interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  unit: string
}

export const RangeInput = ({ label, unit, ...inputProps }: Props) => {
  return (
    <label>
      <span>{label}</span>
      <span className="inputs">
        <input type="range" {...inputProps} />
        <input type="number" {...inputProps} />
        <span className="unit">{unit}</span>
      </span>
    </label>
  )
}
