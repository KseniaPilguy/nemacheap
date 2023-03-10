import { ReactNode } from "react"

import { createGlobalStyle } from "styled-components"
import { PageWrapper, Title } from "@/styles"

import SearchInput from "./SearchInput"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <PageWrapper>
        <Title>Movie List App</Title>
        <SearchInput />
        {children}
      </PageWrapper>

      <GlobalStyle />
    </>
  )
}

export default Layout 

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #82b0d459;
  }
`
