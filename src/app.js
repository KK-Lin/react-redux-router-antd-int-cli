import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import '@/assets/style/index.less'


// Hot Module Replacement API
render();
if (module.hot) module.hot.accept(render);


function render() {
  ReactDOM.render(
    <AppContainer>
      <div>
        <img src={ require('@/assets/images/hot.png') } />
      </div>
    </AppContainer>, getRoot());
}

function getRoot() {
  let root = document.getElementById("root");
  if (root) return root;
  root = document.createElement("div");
  root.id = "root";
  document.body.appendChild(root);
  return root;
}