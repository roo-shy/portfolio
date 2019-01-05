import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const ListLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding-top: 0.5rem;
  letter-spacing: 0.15rem;
  @media (max-width: 1000px) {
    display: inherit;
    margin-left: 20px;
    
  } 
  
`
const StyledLink = styled(Link)`
  color: #221F20;
  text-decoration: none;
  margin-left: 1.666rem
`; 

const PageList = styled.ul`
  list-style: none; 
  margin-left: none;
  display: block;
  @media (max-width: 1000px) {
    display: inherit;
    margin-left: 30px;
  } 
`

const Sidebar = styled.div`
  position: fixed;
  flex-shrink: 0;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: #F8C3B2;
  flex-grow: 1;
  padding-right: 3rem;
  padding-left: 1rem;

  @media (max-width: 1000px) {
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #F8C3B2;
    flex-direction: row;
    padding-left: var(--responsive-padding);
    padding-right: var(--responsive-padding);
    padding-bottom: var(--safe-area-inset-bottom);
  

`

const InnerSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 40rem;
  max-height: 15rem;
  // vertical-align: baseline;
  justify-content: space-around;
  flex-grow: 1;

  @media (max-width: 1000px) {
    flex-direction: row;
    align-items: center;
    // display: inline;
  }
  
`
const Inner = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: left;
  flex-grow: 1;
  padding-top: calc(var(--responsive-padding) + var(--safe-area-inset-top));
  padding-right: calc(var(--responsive-padding) + var(--safe-area-inset-right));
  padding-bottom: calc(
    var(--responsive-padding) + var(--safe-area-inset-bottom)
  );
  float: left; 
  margin: 3rem auto;
  max-width: 1000px;
  overflow-y: auto;
  padding-left: 20%;
`

const Layout = styled.div`
  margin: 0.5rem; 
  display: flex; 
  marginLeft: 0.5rem; 
  flex-direction: row;
  overflow: auto;
  max-width: 600;
`
export default ({ children }) => (
  <Layout>
    <Sidebar>
      <InnerSidebar>
        <StyledLink to="/"><h2>P___W</h2></StyledLink>
        <PageList>
          <li><ListLink to="/about">About</ListLink></li>
          <li><ListLink to="/projects">Projects</ListLink></li>
          <li><ListLink to="/resume">Resume</ListLink></li>
          <li><ListLink to="/contact/">Contact</ListLink></li>
        </PageList>
      </InnerSidebar>
      </Sidebar>
    <Inner>
      {children}
    </Inner>
    
  
  </Layout>
  
)