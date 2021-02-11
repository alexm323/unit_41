import React, {Component, useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

// // accepts a prop that tells axios how many jokes to get from the api which will need to be a defaultProp above our constructor, also need to extend the Component
// function JokeList({ numJokesToGet = 10 }) {
// // we are using the useState hook here to keep track of which jokes are currently in the state
//   const [jokes, setJokes] = useState([]);

//   /* get jokes if there are no jokes */
//   // useEffect will need to be replaced by component lifecycle functionality
//   useEffect(function() {
//     // making the api call
//     async function getJokes() {
//       // going to keep track of jokes so we know which ones we have already seen so all jokes should be unique
//       let j = [...jokes];
//       let seenJokes = new Set();
//       // attempt to get the jokes 
//       try {
//         // need to grab 10 jokes by default
//         while (j.length < numJokesToGet) {
//           let res = await axios.get("https://icanhazdadjoke.com", {
//             headers: { Accept: "application/json" }
//           });
//           // grab the data from the response
//           let { status, ...jokeObj } = res.data;
//           // check if the id of the jokes we recveive in the response matches one we already have
//           if (!seenJokes.has(jokeObj.id)) {
//             // if it doesnt then we add that joke
//             seenJokes.add(jokeObj.id);
//             // push into the array of jokes
//             j.push({ ...jokeObj, votes: 0 });
//             // otherwise we throw an error in the console
//           } else {
//             console.error("duplicate found!");
//           }
//         }
//         // update the state
//         setJokes(j);
//         // catch errors and show the log standard for any api call
//       } catch (e) {
//         console.log(e);
//       }
//     }
//     // if there is no jokes then we should execute the getJokes function
//     if (jokes.length === 0) getJokes();
//     // telling useEffect to run when jokes state is updated or the number of jokes are updated
//   }, [jokes, numJokesToGet]);

//   /* empty joke list and then call getJokes */
//   function generateNewJokes() {
//     setJokes([]);
//   }

//   /* change vote for this id by delta (+1 or -1) we pass this down to our Joke component to update the state */

//   function vote(id, delta) {
//     setJokes(allJokes =>
//       allJokes.map(j => (j.id === id ? { ...j, votes: j.votes + delta } : j))
//     );
//   }

//   /* render: either loading spinner or list of sorted jokes. */

//   if (jokes.length) {
//     let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);
  
//     return (
//       <div className="JokeList">
//         <button className="JokeList-getmore" onClick={generateNewJokes}>
//           Get New Jokes
//         </button>
//         {/* map through add add in a Joke by mapping through our joke array */}
//         {sortedJokes.map(j => (
//           <Joke text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={vote} />
//         ))}
//       </div>
//     );
//   }

//   return null;

// }

// export default JokeList;

// class component in react
class JokeList extends Component {
  // adding a default prop
  static defaultProps = {numJokesToGet: 10};

  constructor(props){
    // inheriting from component 
    super(props);
    // initialize our initial jokes state which is an empty array we will add through to the API
    this.state = {jokes:[]};
    // bind our class methods
    this.generateNewJokes = this.generateNewJokes.bind(this);
    this.vote = this.vote.bind(this); 
  }
// we dont have access to use effect so we have to run a function to getJokes when we mount the component
  componentDidMount(){
    if(this.state.jokes.length < this.props.numJokesToGet){
      this.getJokes();
    }
  }
  // when the component updates we should check if wehave the right number of jokes
  componentDidUpdate(){
    if(this.state.jokes.length < this.props.numJokesToGet){
      this.getJokes();
    }
  }

  // use axios to get the jokes
  async getJokes(){
    try {
      // shorten jokes
      let jokes = this.state.jokes;
      // keep track of the joke votes in local storage so we can organize them in order
      let jokeVotes = JSON.parse(window.localStorage.getItem("jokeVotes")|| "{}");
      // we only want unique jokes which we are checking by their id
      let seenJokes = new Set(jokes.map(joke => joke.id));
      // we want to keep requesting jokes until we get all of the jokes we are requesting in our defaultProps
      // grab this logic from the functional component portion
      while (jokes.length < this.props.numJokesToGet) {
        let res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" }
        });
        let { status, ...joke } = res.data;

        if (!seenJokes.has(joke.id)) {
          seenJokes.add(joke.id);
          jokeVotes[joke.id] = jokeVotes[joke.id] || 0;
          jokes.push({ ...joke, votes: jokeVotes[joke.id]});
        } else {
          console.log("duplicate found!");
        }
        
        
      }
      // we should adjust the joke state once we have ten jokes 
      this.setState({jokes});
      // set the jokeVotes to be the current value
      window.localStorage.setItem("jokeVotes",JSON.stringify(jokeVotes));
    } catch (e) {
      console.log(e)
    }
  }
  // if we want new jokes we have to reset and initialize the process once more 
  generateNewJokes() {
    this.setState(state => ({ jokes: state.jokes.filter(j => j.new)}));
  }
  // vote logic decides what gets shown where in the 10 jokes
  vote(id, delta) {
    let jokeVotes = JSON.parse(window.localStorage.getItem("jokeVotes"));
    jokeVotes[id] = (jokeVotes[id] || 0) + delta;
    window.localStorage.setItem("jokeVotes", JSON.stringify(jokeVotes));
    this.setState(st => ({
      jokes: st.jokes.map(j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
      )
    }));
  }

  // now we render the pieces
  render() {
    let sortedJokes = [...this.state.jokes].sort((a, b) => b.votes - a.votes);
    return (
      <div className="JokeList">
        <button
          className="JokeList-getmore"
          onClick={this.generateNewJokes}
        >
          Get New Jokes
        </button>


        {sortedJokes.map(joke => (
          <Joke
            text={joke.joke}
            key={joke.id}
            id={joke.id}
            votes={joke.votes}
            vote={this.vote}
          />
        ))}
      </div>
    );
  }




}

export default JokeList;