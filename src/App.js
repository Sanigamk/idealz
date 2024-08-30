import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Section1 from './Section1';
import Footer from './Footer';
import Section2 from './Section2';


function App() {
  return (
    <div className='container p-3'>
      <Nav />
      <Section1 />
      <Section2/>
      <Footer />
    </div>
  );
}

export default App;
