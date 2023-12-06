import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Userprofile from "./pages/user/Userprofile";
import Coursedetails from "./components/userprofile/Coursedetails";


const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<Home/>}></Route>
        <Route path="/about" element={<Home/>}></Route>
        <Route path="/contact" element={<Home/>}></Route>
        <Route path="/journal" element={<Home/>}></Route>
        <Route path="/course/:_id" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/user/:activepage/*" element={<Userprofile />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
