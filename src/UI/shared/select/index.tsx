import { ChangeEvent, FC, HTMLAttributes } from 'react'
import { useAppSelector } from 'src/hooks'
import { DataTeacher } from 'src/store/types/types'
import * as Style from './index.styles'

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  editionDataTeachers: DataTeacher[]
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  educationHours?: string
  index: number
  nameForAllEducation: string
}

export const Select: FC<SelectProps> = ({
  onChange,
  editionDataTeachers,
  educationHours,
  index,
  nameForAllEducation,
}): JSX.Element => {

  return (
    <Style.Select
      onChange={onChange}
      disabled={!Number(educationHours)}
    >
      {editionDataTeachers.map((el: DataTeacher, index: number) => (
        <Style.SelectOption value={el.name} key={index}>
          {el.name}
        </Style.SelectOption>
      ))}
    </Style.Select>
  )
}

export default Select
