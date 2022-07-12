import "./App.css";
import Header from "./01GetStarted/Home";
import AboutUs from "./02AboutUs/AboutUs";
import AppContactUs from "./05ContactUs/AppContactUs";
import AppServices from "./04Services/AppServices";
import AppTeamProfile from "./03TeamProfile/AppTeamProfile";
import { MemberProfile } from "./03TeamProfile/AppTeamProfile";

function App() {
  return (
    <div className="App w-75 container-fluid">
      <Header />
      <AboutUs />
      <AppTeamProfile>
        <MemberProfile
          firstName="MARWIN"
          lastName="ALMENDRAS"
          description="This is where our short description will be. Like, Lorem ipsum dolor sit
      amet, consectetur adipiscing elit."
          likes="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <MemberProfile
          firstName="MARIA FE"
          lastName="MERCADO"
          description="This is where our short description will be. Like, Lorem ipsum dolor sit
      amet, consectetur adipiscing elit."
          likes="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <MemberProfile
          firstName="KRISTOFF"
          lastName="VILLANUEVA"
          description="This is where our short description will be. Like, Lorem ipsum dolor sit
      amet, consectetur adipiscing elit."
          likes="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </AppTeamProfile>
      <AppServices />
      <AppContactUs />
    </div>
  );
}

export default App;
