import Home from "./routes/home.route";
import { Route, Routes } from "react-router-dom";
import NavBar from "./routes/navbar.route";
import Shop from "./routes/shop.route";
import SignIn from "./routes/sign-in";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index={true} element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
