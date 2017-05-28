import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import '@style/index.less'


// Hot Module Replacement API`

preRender();
render();
if (module.hot) module.hot.accept(render);


function render() {
	ReactDOM.render(
		<AppContainer>
    <div>1111111
      <img src={ require('@image/hot.png') } />
    </div>
  </AppContainer>, getRoot());
}

function preRender() {
	setBaseFontSize();
}

function setBaseFontSize() {
	let html = document.getElementsByTagName('html')[0];
	html.style.fontSize = (html.offsetWidth / 750) * 100 + "px";
}


function getRoot() {
	let root = document.getElementById("root");
	if (root) return root;
	root = document.createElement("div");
	root.id = "root";
	document.body.appendChild(root);
	return root;
}