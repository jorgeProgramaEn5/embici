import './estilos/App.css';
import Display from './componentes/Display';
import Boton from './componentes/Boton';


function App() {
  return (
    <div className="App">
      <h1>
        Cantidad de km que deseas recorrer
      </h1>
      <Display />
      <Boton text='Click' />
      <Boton text='Reiniciar'/>
    </div>
  );
}

export default App;
