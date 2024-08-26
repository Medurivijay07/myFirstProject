// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}
  onclickingFirstname = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }
  onclickingLastname = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }
  render() {
    const {firstName, lastName} = this.state
    const firstNameText = firstName ? 'Joe' : null
    const lastNameText = lastName ? 'Jonas' : null
    const buttonsClassNames = firstName ? 'hide-name' : 'show-name'
    const buttonClassNames = lastName ? 'hide-name' : 'show-name'
    return (
      <div className="names-container">
        <h1 className="showHidenames">Show/Hide</h1>
        <div>
          <button
            type="button"
            onClick={this.onclickingFirstname}
            className={buttonsClassNames}
          >
            Show/Hide Firstname
          </button>
          <button
            type="button"
            onClick={this.onclickingLastname}
            className={buttonClassNames}
          >
            Show/Hide Lastname
          </button>
        </div>
        <div className="name-container">
          <div className="firstname">{firstNameText}</div>
          <div className="lastname">{lastNameText}</div>
        </div>
      </div>
    )
  }
}

export default ShowHide
