import type { FC } from 'react'

import { StyledRadioInput, TextDiv } from './styled'

type Props = {
  value: string | number
  isChecked: boolean
  labelText: string
  registerFunction: Function
}

export const RadioInput: FC<Props> = ({
  value,
  isChecked,
  labelText,
  registerFunction = () => null,
}) => {
  return (
    <label>
      <StyledRadioInput
        type="radio"
        value={value}
        checked={isChecked}
        {...registerFunction()}
      />
      <TextDiv>{labelText}</TextDiv>
    </label>
  )
}
