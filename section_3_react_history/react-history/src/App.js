import './App.css';
import Counter from './Counter'
function App() {
  return (
    <div className="App">
      <Counter color={"red"} initialValue={10}/>
      <Counter  initialValue={10}/>
    </div>
  );
}

export default App;
