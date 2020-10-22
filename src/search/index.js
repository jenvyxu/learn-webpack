'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import logo from './image/logo.png'
import './search.less'
import '../../common/common'
import { a, b } from './tree-shaking'

if(false) {
  a()
}

class Search extends React.Component {
  render() {
    const text = b()
    return (<div className="search-text">
      搜索文字的内容{text}<img src={logo} />
    </div>)
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
);
