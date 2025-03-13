import { BrowserRouter, Route, Routes } from "react-router";
import { Register } from "./pages/Register";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { AppProviders } from "./providers/App";
import { Login } from "./pages/Login";


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppProviders>
              <Root />
            </AppProviders>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
