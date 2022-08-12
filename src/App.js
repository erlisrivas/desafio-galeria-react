import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './componentes/Header';
import Cardp from './componentes/Cardp';
import Footer from './componentes/Footer';
import paisaje1 from './assets/css/img/paisaje1.jpeg'
import paisaje2 from './assets/css/img/paisaje2.jpeg'
import paisaje3 from './assets/css/img/paisaje3.jpeg'
import paisaje4 from './assets/css/img/paisaje4.jpg'



function App() {
  return (
    <div>
      <Header/>
      <div className='App'>
      <Cardp imagen={paisaje1} titulo="Arroyo Naposta" descripcion="Corriente natural de agua que normalmente fluye con continuidad, pero que a diferencia de un río, tiene escaso caudal. "/>
      <Cardp imagen={paisaje2} titulo="Montañas Karwendel" descripcion=" Los montes del Karwendel son un sistema montañoso de los Alpes orientales, ubicado entre el río Isar, el río Inn y el lago Achen."/>
      <Cardp imagen={paisaje3} titulo="Lago Futalaufquen" descripcion="De origen glaciar, se halla en el Parque Nacional de los Alerces, en Patagonia, y está unido al lago Verde por el río Arrayanes. "/>
      <Cardp imagen={paisaje4} titulo="Montaña nevada" descripcion="Está situada entre las provincias de Granada y Almería. Es el macizo montañoso de mayor altitud de toda Europa occidental, después de los Alpes"/>
      
      </div>
      <Footer/>
    </div>
  );
}

export default App;
