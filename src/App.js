// import logo from './logo.svg';
import './App.css';
// import {Score} from './components/Score'
// import ArrayOfItems from './components/score/ArrayOfItems';
// import Ary from './components/Ary';
// import Chat from './components/Chat';
import HundredArray from './components/HundredArray';
import { items } from './Data';

function App() {
  return (
    <>
      <HundredArray items={items} />
      {/* <Ary /> */}
    </>
  );
}

export default App;
