import type { FC, ReactNode } from 'react'

import { SearchBar } from '@/src/features/streams/components/StreamingCenter/parts/Sidebar/parts/SearchableComponent/parts/SearchBar'
import { useStreamingCenterContext } from '@/src/features/streams/contexts/streaming-center'

export const SearchableComponent: FC<{ children: NonNullable<ReactNode> }> = ({
  children,
}) => {
  const { isSearchVisible } = useStreamingCenterContext()

  const handleSearch = (searchedText: string) => {
    console.log(searchedText)
  }

  return (
    <>
      {isSearchVisible ? (
        <SearchBar onSearch={(text) => handleSearch(text)} />
      ) : null}
      {children}
    </>
  )
}
