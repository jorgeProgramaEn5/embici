import './App.css';
import CardList from './componentes/CardList';


function App() {
  return (
    <div className="App">
      <div className='contenedor_principal'>
        <h1>BICICLETAS</h1>
        <h2>
          Estos son los tipos de bicicletas que 
          puedes encontrar en nuestra tienda
        </h2>
        <CardList />
      </div>
    </div>
  );
}

export default App;
