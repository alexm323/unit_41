import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import DogList from './DogList';
import FindDog from './FindDog';

function Routes({dogs}) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route path="/dogs/:name">
        <FindDog dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;