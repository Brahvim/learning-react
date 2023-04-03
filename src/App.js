import logo from './logo.svg';
import './App.css';

function App() {
  //let logoSize = 1;
  return (
    <div className="App" >
      <header className="App-header" >
        <div className="RotatingImage"
          onPointerEnter={(e) => {
            console.log("Mouse entered the image!");
            // Resize the logo with some interpolation here, perhaps? :D?
            // Would use CSS animations for this, right?!
          }}

          onPointerLeave={(e) => console.log("Mouse left the image!")}>
          <img src={logo} className="App-logo" alt="logo" />
        </div >

        <p >Edit <code >src/App.js</code> and save to reload.</p>

      </header >
    </div >
  );
}

export default App;
