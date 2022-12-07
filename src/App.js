import "./App.css";
import Reviews from "./components/Reviews";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Review from "./components/Review";
import Comment from "./components/Comments";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<Review />} />
        <Route path="/reviews/:review_id/comments" element={<Comment />} />
      </Routes>
    </main>
  );
}

export default App;
