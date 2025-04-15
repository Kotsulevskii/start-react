import './App.css';
import Greeting from './components/welcome';
import MyButton from './components/HomeWork 15.04/Button';
import ItemList from './components/List';
import ItemSelector from './components/ItemSelector';
import BlockColor from './components/HomeWork 15.04/BlockColor';
import Weather from './components/testing';
import TempControl from './components/TempControl';
import SimpleForm from './components/SimpleForm';
import SimpleSecond from './components/SimpleSecond';

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
      
    </>
 
  );
}

export default App;