import React from 'react';

class Counter extends React.Component {
    static defaultProps = {color:'orange'};
    constructor(props){
        // refers to react.Component
        super(props);
        this.state = {count:0,isHiding:false};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }
    increment(){
        this.setState({count:this.state.count+1})
    }
    decrement(){
        this.setState({count:this.state.count-1})
    }
    componentDidMount(){
        console.log("Component Mounted")
    }
    componentDidUpdate(){
        console.log("Component Updated")
    }
    render(){
        console.log("Component rendered")
        const {color}= this.props;
        return(
            <div>
                <h1 style={{color}}>I am a counter</h1>
                <h3>Count is: {this.state.count}</h3>
                <button onClick={this.increment}>Add 1</button>
                <button onClick={this.decrement}>Subtract 1</button>
            </div>
        )
    }
}

export default Counter; 