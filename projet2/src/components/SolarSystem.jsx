import React, { Component } from 'react';
import './SolarSystem.css';
import './mediaQueries.css';

class SolarSystem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <section>
                    <div className="opening hide-UI view-2D zoom-large data-close controls-close">


                        <div id="universe" className="scale-stretched">
                            <div id="galaxy">
                                <div id="solar-system" className="earth">
                                    <div id="mercury" className="orbit">
                                        <div className="pos">
                                            <div className="planet">
                                                <dl className="infos">
                                                    <dt>Mercury</dt>
                                                    <dd><span></span></dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="venus" className="orbit">
                                        <div className="pos">
                                            <div className="planet">
                                                <dl className="infos">
                                                    <dt>Venus</dt>
                                                    <dd><span></span></dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="earth" className="orbit">
                                        <div className="pos">
                                            <div className="orbit">
                                                <div className="pos">
                                                    <div className="moon"></div>
                                                </div>
                                            </div>
                                            <div className="planet">
                                                <dl className="infos">
                                                    <dt>Earth</dt>
                                                    <dd><span></span></dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="mars" className="orbit">
                                        <div className="pos">
                                            <div className="planet">
                                                <dl className="infos">
                                                    <dt>Mars</dt>
                                                    <dd><span></span></dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="jupiter" className="orbit">
                                        <div className="pos">
                                            <div className="planet">
                                                <dl className="infos">
                                                    <dt>Jupiter</dt>
                                                    <dd><span></span></dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="saturn" className="orbit">
                                        <div className="pos">
                                            <div className="planet">
                                                <div className="ring"></div>
                                                <dl className="infos">
                                                    <dt>Saturn</dt>
                                                    <dd><span></span></dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="uranus" className="orbit">
                                        <div className="pos">
                                            <div className="planet">
                                                <dl className="infos">
                                                    <dt>Uranus</dt>
                                                    <dd><span></span></dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="neptune" className="orbit">
                                        <div className="pos">
                                            <div className="planet">
                                                <dl className="infos">
                                                    <dt>Neptune</dt>
                                                    <dd><span></span></dd>
                                                </dl>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sun">
                                        <dl className="infos">
                                            <dt>Sun</dt>
                                            <dd><span></span></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default SolarSystem;