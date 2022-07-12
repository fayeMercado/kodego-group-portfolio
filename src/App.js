import "./App.css";
import AppContactUs from "./AppContactUs/AppContactUs";
import AppServices from "./AppServices/AppServices";
import AppTeamProfile from "./AppTeamProfile/AppTeamProfile";
import { MemberProfile } from "./AppTeamProfile/AppTeamProfile";

function App() {
  return (
    <div className="App w-75 container-fluid">
      <h1>Start here</h1>
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
