import './App.css';
import Jatekter from './componens/Jatekter';

function App() {
  const lista= [true,false,false,true,false,false,true,false,true]
  return (
    <div className="App">
      <header className="App-header">
        <h1>Light on</h1>
      </header>
      <article>
        <Jatekter lista={lista}/>
      </article>
      <footer>Dobszay Dorka</footer>
    </div>
  );
}

export default App;
