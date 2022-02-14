
import './App.css';
import Mensaje from './mensaje';
/* las funciones se declaran con una mayuscula inicial
para evitar ser confundidas con tags de html
*/

/* se parece a HTML y usa babel -> que lo transpila = jsx
    se llama a las varianles con llaves {{}}
    en el jsx no se puede hacer comment
    -> como no se puede poner obj, en date lo que se puede
    hizo fue poner un + para timeStand y da el numero de la
    fecha
    */
    const Description = () => {
      return <p>Esta es la app del bootcamp de REACT</p>
      }

const App= () => {
  return (
    <div className="App">
      < Mensaje color='red' message='Estoy aprendiento'/>
      < Mensaje fontSize='30' message='React con' />
      < Mensaje color='blue' message='@midudev'/>
      <Description/>

      
    </div>
  );
}

export default App;
