import "../css/style.css"

//react Related  CODE
import React from 'react';
import ReactDom from 'react-dom'
import Component from './components/Component'

ReactDom.render(<Component/>, document.querySelector("#react"))

// Allow new JS and CSS to load in browser without a traditional page refresh
if (module.hot) {
  module.hot.accept()
}
