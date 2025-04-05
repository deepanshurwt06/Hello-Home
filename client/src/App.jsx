import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import Listing from "./pages/Listing";
import UpdateListing from "./pages/UpdateListing";
import ListingPage from "./pages/ListingPage";
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
      {/* header is here */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/show-listing" element={<Listing />} />
          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          />
        </Route>
        <Route
          path="/listing-page/:listingId"
          element={<ListingPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
