import React from 'react';
import NavLink from '../navLinks/navLinks';
import './heroBanner.css';
import iphone from '../../assets/iphone.png';
class HeroBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <section className="hero-banner">
            <div className="container hero-banner-content">
                <div className="row">
                    <div className="col-xs-12 col-sm-5">
                        <div className="hero-banner-content-text text-left">
                            <div className="h1 text-primary">{this.props.displayText}</div>
                            <a href="/get-started" className="btn btn-primary">Get Started</a>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-7">
                        <div className="hero-banner-content-image">
                            <img src={iphone} className="rounded float-right" alt="Iphone" style={{width:'300px'}}></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default HeroBanner;
