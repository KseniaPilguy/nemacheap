"use client"

import { useState } from "react"
import { usePathname } from 'next/navigation';
import Router from 'next/router'

import { SearchInputWrapper, SubmitButton, Input } from "./style"

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState('')
  const pathname = usePathname()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedValue = e.target.value
    setSearchValue(updatedValue)
  }

  const handleSearch = () => {
    Router.replace({ pathname, ...(searchValue ? {query: {search: searchValue}} : {})})
  }

  return (
    <SearchInputWrapper>
      <Input 
        type="text" 
        name="movie_search" 
        placeholder="search..." 
        data-testid="search_input"
        value={searchValue} 
        onChange={onChange}
      />
      <SubmitButton type="submit" data-testid="search_button" onClick={handleSearch}>Submit</SubmitButton>
    </SearchInputWrapper>
  )
}

export default SearchInput
