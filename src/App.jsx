import Home from "./routes/home.route";
import { Route, Routes } from "react-router-dom";
import NavBar from "./routes/navbar.route";
import Shop from "./routes/shop.route";
import Authentication from "./routes/authentication";
import Checkout from "./routes/checkout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index={true} element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
