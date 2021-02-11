import React,{Component} from "react";
import "./Joke.css";
// making this Joke component which accepts 4 props 
// function Joke({ vote, votes, text, id }) {
//   // create a simple up and downvote function to be used onClick
//   const upVote = () => vote(id, +1);
//   const downVote = () => vote(id, -1);
//   // we return  and render different divs and buttons and these are listening for vote which is a method we are passing into this component as a prop 
//   return (
//     <div className="Joke">
//       <div className="Joke-votearea">
//         <button onClick={upVote}>
//           <i className="fas fa-thumbs-up" />
//         </button>

//         <button onClick={downVote}>
//           <i className="fas fa-thumbs-down" />
//         </button>

//         {votes}
//       </div>

//       <div className="Joke-text">{text}</div>
//     </div>
//   );
// }

// we need to create a class and a constructor to accep these props and then we can create the up and downvotes functions and we bind them 

class Joke extends Component {
  //  we are accepting these props 
  constructor(props){
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }
  // simple upvote just adds one 
  upVote(){
    this.props.vote(this.props.id, +1);
  }
  // simple downvote subtracts one
  downVote(){
    this.props.vote(this.props.id, -1);
  }
  // render similar data to above but we have to use the bound upvote and downvote in conjunction with 'this' and the this.props we get from the constructor 
  render(){
  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={this.upVote}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={this.downVote}>
          <i className="fas fa-thumbs-down" />
        </button>

        {this.props.votes}
      </div>

      <div className="Joke-text">{this.props.text}</div>
    </div>
  );
  }
}

export default Joke;
