import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Pagination } from './pagination'

export default {
  component: Pagination,
  title: 'Components/UI/Pagination',
} as Meta<typeof Pagination>

export const Default = () => {
  const [page, setPage] = useState(1)
  const onChange = (page: number) => {
    setPage(page)
  }
  const [selectedCount, setSelectedCount] = useState<number>(10)

  return (
    <Pagination
      onChange={onChange}
      page={page}
      selectedCount={selectedCount}
      setSelectedCount={setSelectedCount}
      totalCount={5500}
    />
  )
}
