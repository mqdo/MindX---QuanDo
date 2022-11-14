import { Routes, Route } from "react-router-dom";

import {
  Home,
  Auth,
  Login,
  Register,
  Products,
  Product,
  Invoices,
  Invoice,
  Cart,
  Profile,
  About,
  PageNotFound,
} from "./pages";

import { UserProvider } from "./components";

import "./App.css";

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Routes>
          <Route path="/auth" element={<Auth />}>
            <Route
              path="login"
              element={<Login />}
            />
            <Route
              path="register"
              element={<Register />}
            />
          </Route>
          <Route path="/" element={<Home />}>
            <Route path="products" element={<Products />}>
              <Route path=":id" element={<Product />} />
            </Route>
            <Route path="invoices" element={<Invoices />}>
              <Route path=":id" element={<Invoice />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="profile" element={<Profile />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
