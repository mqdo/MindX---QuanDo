import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  NavBar,
  Login,
  Welcome,
  Footer,
  ProviderContainer,
} from "./components";

const App = () => {
  return (
    <section className="App font-roboto">
      <ProviderContainer>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ProviderContainer>
      <Footer />
    </section>
  );
};
export default App;
