import "./App.css";
import Navbar from "./00Navbar/Navbar";
import Header from "./01GetStarted/Home";
import AboutUs from "./02AboutUs/AboutUs";
import AppTeamProfile from "./03TeamProfile/AppTeamProfile";
import { MemberProfile } from "./03TeamProfile/AppTeamProfile";
import AppServices from "./04Services/AppServices";
import AppContactUs from "./05ContactUs/AppContactUs";
import ScrollTop from "./06ScrollTop/ScrollTop";
import Footer from "./07Footer/Footer";

import mar from "./Images/dp-mar.png";
import faye from "./Images/dp-faye.png";
import kristoff from "./Images/dp-kristoff.png";

function App() {
  return (
    <div className="App w-75 container-fluid">
      <Navbar />
      <Header />
      <AboutUs />
      <AppTeamProfile>
        <MemberProfile
          imgSrc={mar}
          firstName="MARWIN"
          lastName="ALMENDRAS"
          description="I'm from Cebu and Management Accounting Graduate and now a career shifter. I would like to realize my dream to become zero to hero web developer."
          likes="Anime/Manga, Watching movies"
        />
        <MemberProfile
          imgSrc={faye}
          firstName="MARIA FE"
          lastName="MERCADO"
          description="Architect and soon to be web developer; I am into solving problems and finding ways to do things efficiently."
          likes="Food, DIYs, Coffee, Cats"
        />
        <MemberProfile
          imgSrc={kristoff}
          firstName="KRISTOFF"
          lastName="VILLANUEVA"
          description="This is where our short description will be. Like, Lorem ipsum dolor sit
      amet, consectetur adipiscing elit."
          likes="Motorcycling, Road trip, Coding"
        />
      </AppTeamProfile>
      <AppServices />
      <AppContactUs />
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default App;
