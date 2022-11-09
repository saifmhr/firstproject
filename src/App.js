import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
function App() {
  return (
    <>
      <Navbar title="TextUtiles"/>
      <div className="container">
        {/* <Textform header="Enter text here"/> */}
        <About/>
      </div>
    </>
  );
}


export default App;
