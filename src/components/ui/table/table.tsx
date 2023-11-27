import { useState } from 'react'

import {
  ArrowIosDownOutline,
  ArrowIosUp,
  Edit2Outline,
  PlayCircleOutline,
  TrashOutline,
} from '@/assets'

import s from './table.module.scss'

type ColumnHeaders = {
  [key in keyof ItemProps]: string
}

const columnHeaders: ColumnHeaders = {
  cardsCount: 'Cards',
  createdBy: 'Created by',
  figma: 'Figma',
  title: 'Name',
  updated: 'Last Updated',
}

type ItemProps = {
  [key: string]: any
  cardsCount: number
  createdBy: string
  figma: number
  title: string
  updated: string
}

type Props = {
  columnOrder: string[]
  data: ItemProps[]
}

export const Table = ({ columnOrder, data }: Props) => {
  const [sortConfig, setSortConfig] = useState<{ direction: string; key: string } | null>(null)

  const rearrangedData = data.map(item => {
    const reorderedItem: any = {}

    columnOrder.forEach(column => {
      reorderedItem[column] = item[column]
    })

    return reorderedItem
  })

  const requestSort = (key: string) => {
    if (key === 'updated') {
      let direction = 'ascending'

      if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending'
      }
      setSortConfig({ direction, key })
    }
  }

  const sortedData = () => {
    if (!sortConfig) {
      return rearrangedData
    }

    const { direction, key } = sortConfig

    if (key === 'updated') {
      return [...rearrangedData].sort((a, b) => {
        if (a[key] < b[key]) {
          return direction === 'ascending' ? -1 : 1
        }
        if (a[key] > b[key]) {
          return direction === 'ascending' ? 1 : -1
        }

        return 0
      })
    }

    return rearrangedData
  }

  const deleteRow = () => {
    alert('Обработчик удаления ряда')
  }

  const editRow = () => {
    alert('Обработчик редактирования ряда')
  }

  const playRow = () => {
    alert('Обработчик проигрывания ряда')
  }

  const getColumnHeaders = () => {
    if (rearrangedData.length === 0) {
      return null
    }

    return columnOrder.map((header, index) => (
      <th className={s.th} key={index} onClick={() => requestSort(header)}>
        {columnHeaders[header]}
        {sortConfig && sortConfig.key === header && (
          <span>
            {sortConfig.direction === 'ascending' ? <ArrowIosDownOutline /> : <ArrowIosUp />}
          </span>
        )}
      </th>
    ))
  }

  const getRows = () => {
    if (rearrangedData.length === 0) {
      return null
    }

    return sortedData().map((item: any, index: number) => (
      <tr key={index}>
        {columnOrder.map((column, index) => (
          <td className={s.td} key={index}>
            {item[column]}
          </td>
        ))}
        <td className={s.td}>
          <div className={s.actions}>
            <button onClick={() => playRow()}>
              <PlayCircleOutline className={s.icon} />
            </button>
            <button onClick={() => editRow()}>
              <Edit2Outline className={s.icon} />
            </button>
            <button onClick={() => deleteRow()}>
              <TrashOutline className={s.icon} />
            </button>
          </div>
        </td>
      </tr>
    ))
  }

  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr className={s.tr}>{getColumnHeaders()}</tr>
      </thead>
      <tbody className={s.row}>{getRows()}</tbody>
    </table>
  )
}
