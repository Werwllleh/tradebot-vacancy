import Footer from "./components/footer";
import Header from "./components/header";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import {menu} from "./utils/data";
import Profile from "./pages/profile";
import Megabot from "./pages/megabot";
import BotMarket from "./pages/bot-market";
import CoinPrices from "./pages/coin-prices";
import {useValuesStore} from "./store/values-store";
import {useEffect} from "react";


function App() {

  const getData = useValuesStore((state) => state.updateData);

  useEffect(() => {

    const getInfo = setInterval(() => {
      getData()
    }, 5000)

    return () => clearTimeout(getInfo);

  }, []);


  return (
    <>
      <Header/>
      <main className="main">
        <Routes>
          <Route index element={<Dashboard/>}/>
          <Route path={menu.megabot.ROUTE} element={<Megabot/>}/>
          <Route path={menu.botMarket.ROUTE} element={<BotMarket/>}/>
          <Route path={menu.coinPrices.ROUTE} element={<CoinPrices/>}/>
          <Route path={menu.profile.ROUTE} element={<Profile/>}/>
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
