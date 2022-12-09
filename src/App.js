import "./App.css";
import Reviews from "./components/Reviews";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Review from "./components/Review";
import Comment from "./components/Comments";
import UserControls from "./components/UserControls";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { UserContext } from "./context/UserContext";
import ReviewsByCategories from "./components/ReviewsByCategories";

function App() {
  const [activeUser, setActiveUser] = useState({});

  return (
    <main className="App">
      <UserContext.Provider value={{ activeUser, setActiveUser }}>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<Review />} />
          <Route path="/reviews/:review_id/comments" element={<Comment />} />
          <Route path="/signin" element={<UserControls />} />
          <Route
            path="/categories/:category"
            element={<ReviewsByCategories />}
          ></Route>
        </Routes>
      </UserContext.Provider>
    </main>
  );
}

export default App;
