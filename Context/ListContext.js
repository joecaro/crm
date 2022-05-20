import { createContext, useContext, useEffect, useState } from "react";
import { getEvents, getList } from "../pages/api/index";
import auth from "../pages/api/auth";
import IdleTimer from "../pages/api/auth/IdleTimer";

export const ListContext = createContext(null);
export const useListContext = () => useContext(ListContext);

export const ListProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [allCommittees, setAllCommittees] = useState([]);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [needData, setNeedData] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //set events
  useEffect(() => {}, []);

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

      getEvents()
        .then((response) => {
          let templist = [];
          response.data.forEach((item) => {
            templist.push(item);
            setEvents(
              templist.sort((a, b) => {
                return new Date(a.start) - new Date(b.start);
              })
            );
          });
        })
        .catch((err) => console.log(err));

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
      {children}
    </ListContext.Provider>
  );
};
