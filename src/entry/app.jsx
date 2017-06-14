import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Router from '@/router/index.jsx';
import beforeRender from '@entry/beforeRender';
import '@style/index.less';

beforeRender();
// Hot Module Replacement API`

render();
if (module.hot) module.hot.accept(render);


function render() {
	ReactDOM.render(
		<AppContainer>
    <Router/>
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