import {Component} from 'react'
import './index.css'

class FrontendDeveloper extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Bundle & Save</h1>
          <div>
            <div className="firstBox">
              <div className="firstBoxSub">
                <div className="first-sub">
                  <p>1 Pair</p>
                  <p className="firstpera">DKK 195.00</p>
                </div>
                <div>
                  <p className="firstpera">50% OFF</p>
                </div>
              </div>
            </div>
            <div className="SecondBox">
              <div>
                <div className="secondBox1">
                  <p>2 Pair</p>
                  <p className="most">Most Popular</p>
                </div>
                <div className="secondBox1">
                  <p className="main">DKK 345.00</p>
                  <p className="underline">DKK 195.00</p>
                  <p className="main">40% OFF</p>
                </div>
                <div className="select">
                  <select>
                    <option>Size</option>
                  </select>

                  <select>
                    <option>Colour</option>
                  </select>
                </div>
                <div className="select">
                  <select>
                    <option>Size</option>
                  </select>
                  <select>
                    <option>Colour</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="firstBox">
              <div className="firstBoxSub">
                <div className="first-sub">
                  <p>3 Pair</p>
                  <p className="firstpera">DKK 528.00</p>
                </div>
                <div>
                  <p className="firstpera">60% OFF</p>
                </div>
              </div>
            </div>
          </div>
          <div className="final">
            <p className="free">Free today Shipping</p>
            <p className="total">Total : DKK 360.00</p>
          </div>
        </div>
        <button type="button" className="button">
          + Add to Cart
        </button>
        <p className="finalpera"> Powered by Pumper </p>
      </div>
    )
  }
}

export default FrontendDeveloper
