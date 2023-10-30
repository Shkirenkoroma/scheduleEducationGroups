import { FC } from 'react'
import { useAppDispatch, useAppSelector } from 'src/hooks'
import { addColumn, deleteColumn } from 'src/store/slice/index'
import { HiOutlinePlus } from 'react-icons/hi'
import { MdDelete } from 'react-icons/md'
import * as Style from './index.styles'

interface TableHeaderProps {
  index: number
}

const TableHeader: FC<TableHeaderProps> = ({ index }): JSX.Element => {
  const dispatch = useAppDispatch()
  const isNewColumn = useAppSelector(
    (state) => state.educationGroups?.formData[index]?.isNewColumn,
  )

  const addColumnHandler = (): void => {
    dispatch(addColumn({ index: index, value: true }))
  }

  const deleteColumnHandler = (): void => {
    dispatch(deleteColumn({ index: index, value: false }))
  }

  return (
    <Style.TableRow>
      <Style.TableHead>Занятие</Style.TableHead>
      <Style.TableHead>Часы</Style.TableHead>
      <Style.TableHead
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'end',
          gap: 6,
        }}
      >
        <Style.ContainerHead
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            gap: 6,
          }}
        >
          {isNewColumn ? 'Подгруппа 1' : 'Преподаватель'}
          {!isNewColumn && (
            <HiOutlinePlus
              onClick={addColumnHandler}
              style={{ cursor: 'pointer' }}
            />
          )}
        </Style.ContainerHead>
      </Style.TableHead>
      {isNewColumn && (
        <Style.TableHead>
          <Style.ContainerHead
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'end',
              gap: 6,
            }}
          >
            Подгруппа 2
            <MdDelete
              onClick={deleteColumnHandler}
              style={{ cursor: 'pointer' }}
            />
          </Style.ContainerHead>
        </Style.TableHead>
      )}
    </Style.TableRow>
  )
}

export default TableHeader
