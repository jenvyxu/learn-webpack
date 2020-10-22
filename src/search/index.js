import React from 'react'
import ReactDOM from 'react-dom'
import logo from './image/logo.png'
import './search.less'
import '../../common/common'

class Search extends React.Component {
  constructor() {
    super()
    this.state = {
      Text: null
    }
  }

  loadComponent() {
    import('./text').then((Text) => {
      this.setState({
        Text: Text.default
      })
    })
  }

  render() {
    const { Text } = this.state
    return (
      <div className="search-text">
        {
          Text ? <Text /> : null
        }
        搜索文字的内容
        <img src={logo} onClick={this.loadComponent.bind(this)} alt="图片" />
      </div>
    )
  }
}

ReactDOM.render(
  <Search />,
  document.getElementById('root')
);
