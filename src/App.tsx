import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import Home from './pages/Home';
import CompaniesPage from './pages/CompaniesPage';
import LastReviews from './pages/LastReviewsPage';
import ProfilePage from './pages/ProfilePage';
import "./App.css";
import AboutUsPage from "./pages/AboutUsPage";
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
            <Route element={<Layout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/rating-revolution" />} />
              <Route path="/" element={<Home />} />
              <Route path="/hotels" element={<CompaniesPage />} />
              <Route path="/reviews" element={<LastReviews />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
            </Route>
        </Routes>
      </BrowserRouter>  
    </Provider>  
      );
}

export default App;
