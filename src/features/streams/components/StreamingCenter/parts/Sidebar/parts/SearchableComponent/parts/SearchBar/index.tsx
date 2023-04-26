import type { FC } from 'react'
import { useState } from 'react'

import { SearchBarCloseButton, SearchInput, StyledSearchBar } from './styled'

import { CloseIcon } from '../../../../../../../../../ui/icons/CloseIcon'
import { useStreamingCenterContext } from '../../../../../../../../contexts/streaming-center'

type Props = {
  onSearch: (searchedText: string) => void
}

export const SearchBar: FC<Props> = ({ onSearch }) => {
  const [searchedValue, setSearchedValue] = useState('')

  const { setIsSearchVisible } = useStreamingCenterContext()

  return (
    <StyledSearchBar>
      <SearchInput
        type="text"
        value={searchedValue}
        onChange={(ev) => {
          setSearchedValue(ev.target.value)
          onSearch(ev.target.value)
        }}
        placeholder="Search"
      />
      <SearchBarCloseButton
        type="button"
        onClick={() => setIsSearchVisible(false)}
      >
        <CloseIcon height={14} width={14} />
      </SearchBarCloseButton>
    </StyledSearchBar>
  )
}
