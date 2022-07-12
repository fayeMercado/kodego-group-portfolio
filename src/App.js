import "./App.css";
import AppContactUs from "./AppContactUs/AppContactUs";
import AppServices from "./AppServices/AppServices";

function App() {
  return (
    <div className="App w-75 container-fluid">
      <h1>Start here</h1>
      <AppServices />
      <AppContactUs />
    </div>
  );
}

export default App;
