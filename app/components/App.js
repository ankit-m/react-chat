import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

let mount = document.createElement('div')
document.body.appendChild(mount);

ReactDOM.render(
  <Main />,
  mount
)
