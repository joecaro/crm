import React, { useContext, useEffect, useState } from "react";
import {
  MenuDisplayButton,
  NavContainer,
  Logo,
  NavBarElements,
} from "./NavBarElements";
import Link from "next/link";
import { useRouter } from "next/router";
import { ListContext } from "../ListContext/ListContext";

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn, setNeedData, auth } =
    useContext(ListContext);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const router = useRouter();

  function toggleMenu() {
    setIsDisplayed(!isDisplayed);
  }

  function handleLogout() {
    auth.logout(() => {
      setIsLoggedIn(false);
      setNeedData(false);
      router.push("/");
    });
  }

  useEffect(() => {
    if (location.pathname !== "/" && !isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      <NavContainer isDisplayed={isDisplayed}>
        <NavBarElements>
          <Link href='/home' onClick={toggleMenu}>
            <div>
              <i className='bi bi-house'></i>
              <span>Home</span>
            </div>
          </Link>
          <Link href='/list?q=monthly' onClick={toggleMenu}>
            <div>
              <i className='bi bi-calendar'></i>
              <span>Monthly</span>
            </div>
          </Link>
          <Link href='/list?q=quarterly' onClick={toggleMenu}>
            <div>
              <i className='bi bi-calendar'></i>
              <span>Quarterly</span>
            </div>
          </Link>
          <Link href='/list?q=semi-annual' onClick={toggleMenu}>
            <div>
              <i className='bi bi-calendar'></i>
              <span>Semi-Annual</span>
            </div>
          </Link>
          <Link href='/committees' onClick={toggleMenu}>
            <div>
              <i className='bi bi-card-list'></i>
              <span>Committees</span>
            </div>
          </Link>
          {/* <Link href='/users' onClick={toggleMenu}>
            <span>
              <i className='bi bi-people'></i>
              <span>Users</span>
            </span>
          </Link> */}
        </NavBarElements>
        <p onClick={handleLogout}>Log Out</p>
      </NavContainer>
      <Logo isDisplayed={isDisplayed} />
      <MenuDisplayButton isDisplayed={isDisplayed} onClick={toggleMenu}>
        <i className='bi bi-list'></i>
      </MenuDisplayButton>
    </>
  );
};

export default NavBar;
