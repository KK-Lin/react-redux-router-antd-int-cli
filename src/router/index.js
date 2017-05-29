import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Collect from './collect';

export default function() {
    return (
        <Router>
          <Collect></Collect>
        </Router>
    )
}