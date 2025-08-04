import Navbar from './components/navbar';
import Hero from './components/hero';
import Experience from './components/experience';
import Clients from './components/clients';

function App() {
  return (
    <div style={{
      backgroundColor:"black",
      minHeight:"100vh",
      width: "100vw",
    }}>
      <Navbar />
      <Hero />
      <Experience />
      <Clients />
    </div>
  );
}

export default App;
