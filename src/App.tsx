import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CompaniesPage from "./pages/CompaniesPage";
import LastReviews from "./pages/ReviewsPage";
import ProfilePage from "./pages/ProfilePage";
import "./App.css";
import AboutUsPage from "./pages/AboutUsPage";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { PrivateRoute } from "./components/PrivateRoute";
import CompaniesDetailsPage from "./pages/CompaniesDetailsPage";
import CreateUserPage from "./pages/CreateUserPage";

function App() {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<LoginPage key="loginPage" />} />
            <Route path="/" element={<Home key="home" />} />
            <Route
              path="/hotels"
              element={<CompaniesPage key="companiesPage" />}
            />
            <Route
              path="/hotels/:id"
              element={<CompaniesDetailsPage key="companiesDetailsPage" />}
            />
            <Route
              path="/reviews"
              element={<LastReviews key="lastReviews" />}
            />
            <Route
              path="/about-us"
              element={<AboutUsPage key="aboutUsPage" />}
            />
            <Route
              path="/create-user"
              element={<CreateUserPage key="crateUserPage" />}
            />
            <Route element={<PrivateRoute />} path="/profile">
              <Route element={<ProfilePage />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
