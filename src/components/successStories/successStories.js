import React from 'react';
import './successStories.css';
import VideoIframe from '../videoIframe/videoIframe';
class SuccessStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <section className="success-stories">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <div className="h2 text-primary text-center">Our Success Stories</div>
                    </div>
                    <div className="col-xs-12 col-sm-12">
                        <div className="success-stories-videos">
                            <div className="row">
                                <div className="col-xs-4 col-sm-4 justify-content-center">
                                    <VideoIframe title="idc video" src="https://www.youtube.com/embed/PFVHUJP25Cg" desc="Our work with Private Schools"/>
                                </div>
                                <div className="col-xs-4 col-sm-4 justify-content-center">
                                    <VideoIframe title="idc video" src="https://www.youtube.com/embed/9msO4wzgMGI" desc="Our work with Govt Schools"/>
                                </div>
                                <div className="col-xs-4 col-sm-4 justify-content-center">
                                    <VideoIframe title="idc video" src="https://www.youtube.com/embed/vecrm1VHwwk" desc="Our work with Career Counselors"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center p-5">
                    <button type="button" className="btn btn-outline-primary">More Success Stories</button>
                </div>
            </div>
        </section>
    );
  }
}

export default SuccessStories;
