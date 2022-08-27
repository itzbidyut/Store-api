import "./App.css";
import Header from "./container/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductLists from "./container/ProductLists";
import ProductDetails from "./container/ProductDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductLists />}></Route>
          <Route
            path="/product/:productId"
            element={<ProductDetails />}
          ></Route>
          <Route>404 not found</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
