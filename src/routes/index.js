import React from 'react';
import Counter from '../pages/Counter';
import Todo from '../pages/Todo'
import { Switch, Route } from 'react-router-dom';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Counter} />
            <Route path="/todo" exact component={Todo} />
        </Switch>
    );
}

export default Routes;