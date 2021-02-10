import React, { useState} from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

const Routes = () => {
    // start off with a few colors but if i used local storage I could keep track of the colors we have added and load those in
    const initialColors = {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    };
    // need state to update when we add a new color
    const [colors,setColors] = useState(initialColors);
    // method to pass down into our form so we can update the state with the form data
    const addColor = (newColorData) => {
        setColors(currentColors => ({...currentColors,...newColorData}));
    }

    function showCurrentColor(props) {
        // extracting the url color
        const { color } = props.match.params;
        // grab the hex data from the color picker
        const hex = colors[color];
        // pass in the props 
        return <Color {...props} hex={hex} color={color} />;
      };


    return(
        <div>
    {/* we use a router with a switch so we can use a default redirect if they go outside of our listed colors although I currently have an issue that eerases the colors when i input that in */}
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors">
          <ColorList colors={colors} />
        </Route>
        <Route exact path="/colors/new">
          <NewColorForm addColor={addColor} />
        </Route>
        <Route path="/colors/:color" render={showCurrentColor} />
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
        </div>
        
    )

}

export default Routes;