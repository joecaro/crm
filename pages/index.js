import Login from "../components/Login/Login";
import { useContext } from "react";
import { ListContext } from "../components/ListContext/ListContext";

export default function homepage() {
  const { setNeedData, setIsLoggedIn } = useContext(ListContext);

  return <Login setNeedData={setNeedData} setIsLoggedIn={setIsLoggedIn} />;
}
