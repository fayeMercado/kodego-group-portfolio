import "./App.css";
<<<<<<< HEAD
import Header from "./01GetStarted/Header";
import AboutUs from "./02AboutUs/AboutUs";
=======
import Header from "./components/Header";
>>>>>>> 31602c6825741cc5598ef4684d46567e4ab32e3b
import AppContactUs from "./AppContactUs/AppContactUs";
import AppServices from "./AppServices/AppServices";
import AppTeamProfile from "./AppTeamProfile/AppTeamProfile";
import { MemberProfile } from "./AppTeamProfile/AppTeamProfile";

function App() {
<<<<<<< HEAD
	return (
		<div className="App w-75 container-fluid">
			<Header />
			<AboutUs />
			<AppContactUs />
		</div>
	);
=======
  return (
    <div className="App w-75 container-fluid">
  	  <h1>CareerShifters</h1>
		  <p>This is a team portfolio</p>
		  <Header />
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
>>>>>>> 31602c6825741cc5598ef4684d46567e4ab32e3b
}

export default App;
