import React,{Component} from "react";
import JokeList from "./JokeList";

// standard way to write an app component need to switch this to a class extension with a render method
// function App() {

//   return (
//     <div className="App">
//       <JokeList />
//     </div>
//   );
// }

class App extends Component{
  render() {
    return (
      <div className="App">
        <JokeList/>
      </div>
    );
  }
}
export default App;
