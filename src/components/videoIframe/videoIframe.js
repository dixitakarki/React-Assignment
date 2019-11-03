import React from 'react';
import './videoIframe.css';
class VideoIframe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <React.Fragment>
            <iframe title={this.props.title} className="video-iframe border"
            src={this.props.src} frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <span>{this.props.desc}</span>
        </React.Fragment>
    );
  }
}

export default VideoIframe;
