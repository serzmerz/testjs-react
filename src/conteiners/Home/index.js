import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col s12 m12">
                        <div className="card">
                            <div className="card-content">
                                <span className="card-title">Home page</span>
                                <div className="divider"> </div>
                                <div className="row">
                                    <div className="col s12 m12">
                                        <br/>
                                        <h6>Developing by Sergey Tansky</h6>
                                            <br/>
                                        <a href="https://mail.google.com">serzmerz@gmail.com</a>
                                        <p>+38(050)87-45-114</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;