import { useEffect } from "react";
import { useState } from "react";
import { ListContext } from "../components/ListContext/ListContext";
import IdleTimer from "./api/auth/IdleTimer";
import { getList } from "./api/index";
import NavBar from "../components/NavBar/NavBar";
import Side from "../components/Side/Side";
import Head from "next/head";
import "../styles/globals.css";
import auth from "./api/auth/index";

function MyApp({ Component, pageProps }) {
  const [events, setEvents] = useState([]);
  const [allCommittees, setAllCommittees] = useState([]);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [needData, setNeedData] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      new IdleTimer({
        timeout: 1000 * 60 * 15,
        onTimeout: () => {
          console.log("timed out");
          auth.logout(() => {
            setIsLoggedIn(false);
            setNeedData(false);
          });
        },
      });
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (needData) {
      let token = localStorage.getItem("token");
      getList(token)
        .then((response) => {
          setAllCommittees(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
      setIsLoading(false);
    }
  }, [needData]);

  return (
    <ListContext.Provider
      value={{
        allCommittees,
        setAllCommittees,
        list,
        setList,
        isLoading,
        setIsLoading,
        needData,
        setNeedData,
        isLoggedIn,
        setIsLoggedIn,
        events,
        setEvents,
        auth,
      }}>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'></meta>
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css'></link>
      </Head>
      <NavBar />
      <Side />
      <Component {...pageProps} />
    </ListContext.Provider>
  );
}

export default MyApp;
