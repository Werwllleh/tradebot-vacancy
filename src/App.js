import Footer from "./components/footer";
import Header from "./components/header";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard";


function App() {
  return (
    <>
      <Header/>
      <main className="main">
        <Routes>
          <Route index element={<Dashboard/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
