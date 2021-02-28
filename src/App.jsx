import "./styles/global.css";
import "sf-font";
import { Header } from "./components/Header";
import { NothingHere } from "./components/NothingHere";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="container">
        <div className="main">
          <NothingHere />
        </div>
      </section>
    </div>
  );
}

export default App;
