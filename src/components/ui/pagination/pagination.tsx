import React from 'react'

import KeyboardArrowLeft from '@/assets/icons/keyboard-arrow-left'
import KeyboardArrowRight from '@/assets/icons/keyboard-arrow-right'
import { Typography } from '@/components/ui/typography'

import pgn from './pagination.module.scss'

export type PaginationPropsType = {
  onChange: (page: number) => void
  page: number
  selectedCount: number
  setSelectedCount: (select: number) => void
  totalCount: number
}

export const Pagination: React.FC<PaginationPropsType> = ({
  onChange,
  page,
  selectedCount,
  setSelectedCount,
  totalCount,
}) => {
  const lastPage = Math.ceil(totalCount / selectedCount)
  const onChangeCallback = (targetPage: number) => onChange(targetPage)

  const onChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    const count: number = Number(event.target.value)

    setSelectedCount(count)
    onChange(1)
  }

  const renderPageButton = (pageNumber: number) => (
    <button
      className={pgn.pageButton + (pageNumber === page ? ` ${pgn.active}` : '')}
      key={`page_${pageNumber}`}
      onClick={() => onChangeCallback(pageNumber)}
    >
      {pageNumber}
    </button>
  )

  const renderEllipsis = () => <span className={pgn.pageButton}>...</span>

  const renderFirstPage = () => renderPageButton(1)
  const renderLastPage = () => renderPageButton(lastPage)

  const renderPagination = () => {
    const paginationItems = []

    if (lastPage <= 5) {
      for (let i = 1; i <= lastPage; i++) {
        paginationItems.push(renderPageButton(i))
      }
    } else {
      if (page <= 3) {
        for (let i = 1; i <= 5; i++) {
          paginationItems.push(renderPageButton(i))
        }
        paginationItems.push(renderEllipsis())
        paginationItems.push(renderLastPage())
      } else if (page >= lastPage - 2) {
        paginationItems.push(renderFirstPage())
        paginationItems.push(renderEllipsis())
        for (let i = lastPage - 3; i <= lastPage; i++) {
          paginationItems.push(renderPageButton(i))
        }
      } else {
        paginationItems.push(renderFirstPage())
        paginationItems.push(renderEllipsis())
        paginationItems.push(renderPageButton(page - 1))
        paginationItems.push(renderPageButton(page))
        paginationItems.push(renderPageButton(page + 1))
        paginationItems.push(renderEllipsis())
        paginationItems.push(renderLastPage())
      }
    }

    return paginationItems
  }

  const isPrevButtonDisabled = page === 1
  const isNextButtonDisabled = page === lastPage

  return (
    <div className={pgn.pagination}>
      <button
        className={pgn.prevButton}
        disabled={isPrevButtonDisabled}
        onClick={() => onChangeCallback(page - 1)}
      >
        <KeyboardArrowLeft color={isPrevButtonDisabled ? '#808080' : '#fff'} />
      </button>
      {renderPagination()}
      <button
        className={pgn.nextButton}
        disabled={isNextButtonDisabled}
        onClick={() => onChangeCallback(page + 1)}
      >
        <KeyboardArrowRight color={isNextButtonDisabled ? '#808080' : '#fff'} />
      </button>
      <Typography as={'span'} className={pgn.text1}>
        Показать
      </Typography>
      <select className={pgn.select} onChange={onChangeSelect} value={selectedCount}>
        <option value={4}>4</option>
        <option value={7}>7</option>
        <option value={10}>10</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
      <Typography as={'span'} className={pgn.text2}>
        на странице
      </Typography>
    </div>
  )
}
