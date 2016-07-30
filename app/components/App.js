import React from 'react'
import ReactDOM from 'react-dom'
import '../css/bootstrap.min.css'

class Main extends React.Component {
  render() {
    return (
      <h3>Example heading <span className="label label-default">New</span></h3>
    );
  }
}

let mount = document.createElement('div')
document.body.appendChild(mount);

ReactDOM.render(
  <Main />,
  mount
)
