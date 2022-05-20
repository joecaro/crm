import Login from "../components/Login/Login";
import { useListContext } from "../Context/ListContext";

export default function homepage() {
  const { setNeedData, setIsLoggedIn } = useListContext();

  return <Login setNeedData={setNeedData} setIsLoggedIn={setIsLoggedIn} />;
}
