import './App.css';
import Routes from './Routes'
// need to have some different components 
// on this one we can load in just the links to the existing colors in the color factory so we can put those links in routes 
// we are going to need to add links to the routes so we are going to need a form 
// the form is going to be passed down a method as a prop with state that adds the color in the parent component 
// we have to render the color that we create and we can use the history hook to keep track of it 


function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
