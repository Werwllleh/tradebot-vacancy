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
          <Route path={"/megabot"} element={<Dashboard/>} />
          <Route path={"/bot-market"} element={<Dashboard/>} />
          <Route path={"/coin-prices"} element={<Dashboard/>} />
          <Route path={"/profile"} element={<Dashboard/>} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
