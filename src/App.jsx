import Login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/MainHeader/MainHeader";
import { useContext } from "react";
import AuthContext from "./Store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
