import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import Shows from "./Shows";
import Ad from "./Ad";
import requests from "./requests";
import Footer from "./Footer";
import Spacer from "./Spacer";

function App() {
  return (
    <div className="App">
      <Header />
      <Spacer />
      <Banner />
      <Shows title="Fall 2021 Season" fetchURL={requests.fetchTokyoMX} />
      <Shows title="New on Funimation" fetchURL={requests.fetchAnimaxAsia} />
      <Shows title="Current Dubs" fetchURL={requests.fetchCrunchyRoll} />
      <Ad />
      <Footer />
    </div>
  );
}

export default App;
