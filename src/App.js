import "./App.css";
import Header from "./01GetStarted/Header";
import AboutUs from "./02AboutUs/AboutUs";
import AppContactUs from "./AppContactUs/AppContactUs";

function App() {
	return (
		<div className="App w-75 container-fluid">
			<Header />
			<AboutUs />
			<AppContactUs />
		</div>
	);
}

export default App;
