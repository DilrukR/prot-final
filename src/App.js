import "./App.scss";
import { Nav } from "./components";
import { Header, About, Quote, Skills, Works } from "./containers";

function App() {
  return (
    <div className='App'>
      <Nav />
      <Header />
      <About />
      <Quote />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
