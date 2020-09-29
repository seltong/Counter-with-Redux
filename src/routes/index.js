import React from 'react';
import Counter from '../pages/Counter';
import Todo from '../pages/Todo';
import Movies from '../pages/Movies';
import { Switch, Route } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Counter} />
            <Route path="/todo" exact component={Todo} />
            <Route path="/movies" exact component={Movies} />
        </Switch>
    );
}

export default Routes;