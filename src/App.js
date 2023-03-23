import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import UserDetail from "./Components/Users/UserDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <UserDetail></UserDetail>
    </div>
  );
}

export default App;
