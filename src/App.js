import './App.css';
import Hello from './Hello.js'
import Buy from './Buy.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Buy parent_color={"black"}/>
        <Hello parent_color={"black"}/>
      </header>
    </div>
  );
}

export default App;
