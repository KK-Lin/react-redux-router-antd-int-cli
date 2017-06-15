import React from 'react';
import propsType from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DemoView from '@views/Demo.view';

export default function(props) {
    return (
        <Router>
          <Route path="/demo" component={ DemoView } />
        </Router>
    )
}