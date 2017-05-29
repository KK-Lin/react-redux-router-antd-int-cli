import React from 'react';
import { Route } from 'react-router-dom'

import index from '@/views/index';

export default function() {
    return (
        <div className="app-router">
          <Route exact path="/" component={ index } />
        </div>
    )
}