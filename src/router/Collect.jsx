import React from 'react';
import propsType from 'prop-types';
import { Route } from 'react-router-dom';
import DemoView from '@views/Demo.view';

export default function(props) {
    return (
        <div className="app-router">
          <Route path="/demo" component={ DemoView } />
        </div>
    )
}