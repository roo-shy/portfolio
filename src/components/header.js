import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { Link, withPrefix } from 'gatsby'
import Logo from './logo'

const OuterSidebar = styled.div`
  margin-bottom: 6rem;
  width: 100%;
  margin-top: 0;
`
const InnerSidebar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1300px;
  position: relative;
  margin: 0 auto;
`
const PageList = styled.ul`
  margin-left: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  list-style: none inside none;
  @media only screen(max-width: 800px) {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 100%;
    display: block;
    width: 100%;
  }
`
const Dropdown = styled.ul`
  position: absolute;
  right: 10000px;
  opacity: 0;
  display: block;
  padding: 0.5rem 0;
  z-index: 1010;
`

const DropdownLi = styled.li`
  display: block;
  padding-top: 0.5rem;
  text-align: right;
  a:hover {
    color: #ce8d85;
  }

  @media only screen and (min-width: 0px) and (max-width: 768px;) {
    text-align: left;
  }
`

const ListLink = styled(Link)`
  @media (max-width: 800) {
    :hover {
      color: white;
    }
  }
`
const LogoDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`
const Nav = styled.nav`
  display: flex;
  @media (max-width: 800px) {
    z-index: 6;
    background-color: #ce8d85;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    width: 100%;
    height: 100%;
    display: ${props => (props.showMenu ? 'block' : 'none')};
  }
  @media (min-width: 800px) {
    display: block;
  }
`
const LinkLi = styled.li`
  @media (min-width: 800px) {
    display: inline-block;
    position: relative;
    margin-left: 3.8rem;
    text-decoration: none;
    position: relative;
    z-index: 5;
    :hover,
    :focus,
    :focus-within {
      ${Dropdown} {
        right: 0;
        opacity: 1;
        transition: opacity 0.75s ease;
      }
      :last-child {
        padding-right: 0;
      }
    }

    :after {
      background: none repeat scroll 0 0 transparent;
      bottom: -5px;
      content: '';
      display: block;
      height: 3px;
      left: 50%;
      position: absolute;
      background: #ba6055;
      z-index: -1;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    :hover:after {
      width: 100%;
      left: 0;
      right: 0;
    }
  }

  @media (max-width: 800px) {
    font-size: 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 100%;
    :hover,
    :focus,
    :focus-within {
      ${Dropdown} {
        right: 0;
        opacity: 1;
        transition: opacity 0.75s ease;
      }
      
    ${ListLink}:hover {
      color: white;
    }
  }
`
const BurgerMenu = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 48px;
  height: 48px;
  position: relative;
  z-index: 8;
  @media (max-width: 800px) {
    display: flex;
  }
`
const TopLine = styled.span`
  position: relative;
  display: block;
  width: 21px;
  height: 1px;
  border-radius: 2px;
  background-color: black;
  transform: ${props => (props.toggle ? 'rotate(-45deg)' : 'none')};
`
const BottomLine = styled.span`
  position: relative;
  display: block;
  width: 21px;
  height: 1px;
  background-color: black;
  border-radius: 2px;
  transform: ${props => (props.toggle ? 'rotate(45deg)' : 'none')};
`
const ALink = styled.a`
  @media (max-width: 800px) {
    :hover {
      color: white;
    }
  }
`
const LogoSVG = styled.svg`
  height: 80px;
  width: 80px;
  fill: #ba6055;
`
const Header = ({ pageLinks }) => {
  const [showSideMenu, setShowSideMenu] = useState(false)

  const handleSideMenuToggle = () => {
    if (window.innerWidth <= 800) {
      setShowSideMenu({ showSideMenu: !showSideMenu })
    }
  }

  const dropDownItems = ['code', 'cartograpy']
  return (
    <OuterSidebar>
      <InnerSidebar>
        <LogoDiv>
          <Link to="/" title="homepage">
            <LogoSVG viewBox="0 0 100 100">
              <Logo />
            </LogoSVG>
          </Link>
        </LogoDiv>
        <LogoDiv links>
          <Nav showMenu={showSideMenu}>
            <PageList>
              {pageLinks.map(link => {
                return link.name === 'projects' ? (
                  <Fragment>
                    <LinkLi key={link.name}>
                      <ALink aria-haspopup="true">{link.name}</ALink>
                      <Dropdown>
                        {dropDownItems.map(item => (
                          <DropdownLi key={item}>
                            <ALink href={`/${item}`}>{item}</ALink>
                          </DropdownLi>
                        ))}
                      </Dropdown>
                    </LinkLi>
                  </Fragment>
                ) : (
                  <LinkLi key={link.name}>
                    <ListLink to={link.link} title={link.name}>
                      {link.name}
                    </ListLink>
                  </LinkLi>
                )
              })}
              <LinkLi>
                <ALink
                  href={withPrefix('/paigewilliamsresume.pdf')}
                  rel="noopener noreferrer"
                  target="_blank"
                  title="resume"
                >
                  resume
                </ALink>
              </LinkLi>
              <LinkLi>
                <ALink href="mailto:paw145@humboldt.edu">contact</ALink>
              </LinkLi>
            </PageList>
          </Nav>
          <BurgerMenu onClick={handleSideMenuToggle}>
            <TopLine toggle={showSideMenu}></TopLine>
            <BottomLine toggle={showSideMenu}></BottomLine>
          </BurgerMenu>
        </LogoDiv>
      </InnerSidebar>
    </OuterSidebar>
  )
}

export default Header
