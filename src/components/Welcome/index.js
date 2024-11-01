import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: 'Subscribe',
  }

  getsClicked = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === 'Subscribe') {
      this.setState({isSubscribed: 'Subscribed'})
      console.log('Subscribed')
    } else {
      this.setState({isSubscribed: 'Subscribe'})
      console.log('Not Subscribed')
    }
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg-containerrrrr">
        <h1 className="heading">Welcome</h1>
        <p className="description">ThankYou! Happy Learning</p>
        <div>
          <button type="button" className="button" onClick={this.getsClicked}>
            {isSubscribed}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
