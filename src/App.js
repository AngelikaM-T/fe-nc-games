import "./App.css";
import Reviews from "./components/Reviews";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Review from "./components/Review";
import Comment from "./components/Comments";
import UserControls from "./components/UserControls";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [activeUser, setActiveUser] = useState({});

  return (
    <main className="App">
      <Header />
      <NavBar activeUser={activeUser} />
      <Routes>
        <Route path="/" element={<Reviews activeUser={activeUser}/>} />
        <Route path="/reviews/:review_id" element={<Review activeUser={activeUser}/>} />
        <Route path="/reviews/:review_id/comments" element={<Comment activeUser={activeUser}/>} />
        <Route
          path="/signin"
          element={<UserControls activeUser={activeUser} setActiveUser={setActiveUser} />}
        />
      </Routes>
    </main>
  );
}

export default App;
