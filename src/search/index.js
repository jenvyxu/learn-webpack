'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import logo from './image/logo.png'
import './search.less'
import '../../common/common'

class Search extends React.Component {
  render() {
    return (<div className="search-text">
      搜索文字的内容<img src={logo} />
    </div>)
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
);
