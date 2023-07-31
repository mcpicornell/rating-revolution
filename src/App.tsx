import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Layout from './components/Layout';
import Index from './pages/Index';
import CompaniesPage from './pages/CompaniesPage';
import LastReviews from './pages/LastReviewsPage';
import ProfilePage from './pages/ProfilePage';
import "./App.css";
import AboutUsPage from "./pages/AboutUsPage";


function App() {
  return (
      <BrowserRouter >
        <Routes>
            <Route element={<Layout />}>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/rating-revolution" />} />
              <Route path="/" element={<Index />} />
              <Route path="/hotels" element={<CompaniesPage />} />
              <Route path="/reviews" element={<LastReviews />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
            </Route>
        </Routes>
      </BrowserRouter>  );
}

export default App;
