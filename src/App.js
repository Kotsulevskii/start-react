import './App.css';
import Greeting from './components/welcome';
import MyButton from './components/Button';
import ItemList from './components/List';
import ItemSelector from './components/ItemSelector';
import BlockColor from './components/BlockColor';
import Weather from './components/testing';
import TempControl from './components/TempControl';
import SimpleForm from './components/SimpleForm';
import SimpleSecond from './components/SimpleSecond';
import UseEffect from './components/Test';
import UseRef from './components/UseRef';
import UseRefCounter from './components/UseRefCounter';
import RedCounter from './components/UseContext';

function App() {
  return (
    <>
      <Greeting name="Maksim"/>
      <MyButton label="Жми меня" onClick={()=> alert("Меня нажали!")}/>
      <MyButton label="Не жми меня" onClick={()=> alert("Меня всё-таки нажали!")}/>
      <ItemList items = {['яблоко', 'банан', 'чурчхела', 'тыблоко']}/>
      <ItemSelector items = {['яблоко', 'банан', 'чурчхела']}
       onSelect={(elem) => alert(`Вы выбрали: ${elem}`)}/>
       <BlockColor color='red'/>
       <Weather/>
       <TempControl/>
       <SimpleForm/>
       <SimpleSecond/>
       <UseEffect/>
       <UseRef/>
       <UseRefCounter/>
      <RedCounter/>
    </>
 
  );
}

export default App;