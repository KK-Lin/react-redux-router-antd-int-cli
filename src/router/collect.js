import React from 'react';
import { Route } from 'react-router-dom'

import index from '@views/index';
import test from '@views/test';

export default function() {
    return (
        <div className="app-router">
          <Route path="/test" component={ test } />
          <Route exact path="/" component={ index } />
        </div>
    )
}