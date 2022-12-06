import "./App.css";
import Reviews from "./components/Reviews";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Review from "./components/Review";

function App() {
  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<Review />} />
      </Routes>
    </main>
  );
}

export default App;
