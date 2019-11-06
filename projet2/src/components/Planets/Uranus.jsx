import React, { Component } from 'react';

class Uranus extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }


    render() {
        return (
            <div>
                <img className="uranus" src="https://www.astro-rennes.com/planetes/images/uranus/detail_uranus.jpg"/>
            <h1 className="color-planets-txt font-size-h1-planets">Uranus</h1>
              
                <div className="dad-block-txt-mercury">

                

                    <p className="color-planets-txt style-border-planet-txt">
                    
                    </p>

                    <p className="color-planets-txt style-border-planet-txt">
                   
                    </p>

                    <p className="color-planets-txt style-border-planet-txt">
                        
                    
                                        
                    </p>

                    </div>
            </div>
        );
    }


}

export default Uranus;