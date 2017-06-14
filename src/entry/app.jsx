import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from '@reducers/index.jsx';
import Router from '@/router/index.jsx';
import beforeRender from '@entry/beforeRender';
import '@style/index.less';

beforeRender();
// Hot Module Replacement API`
let store = createStore(reducers);
render();
if (module.hot) module.hot.accept(render);


function render() {
	ReactDOM.render(
		<AppContainer>
    <Provider store={ store }>
      <Router/>
    </Provider>
  </AppContainer>, getRoot());
}


function getRoot() {
	let id = "app";
	let root = document.getElementById(id);
	if (root) return root;
	root = document.createElement("div");
	root.id = id;
	document.body.appendChild(root);
	return root;
}