import Navbar from './components/navbar';
import Hero from './components/hero';
import Clients from './components/clients';

function App() {
  return (
    <div style={{
      backgroundColor:"black",
      height:"100vh",
      width: "100vw",

    }}>
      <Navbar />
      <Hero />
      <Clients />
    </div>
  );
}

export default App;
