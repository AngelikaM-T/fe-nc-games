import "./App.css";
import Reviews from './components/Reviews'
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
   <main className="App">
    <Header />
    <Routes>
      <Route path='/' element={<Reviews />}/>
    </Routes>
   </main>
  );
}

export default App;
