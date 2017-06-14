import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Collect from './Collect';

export default function() {
    return (
        <Router>
          <Collect></Collect>
        </Router>
    )
}