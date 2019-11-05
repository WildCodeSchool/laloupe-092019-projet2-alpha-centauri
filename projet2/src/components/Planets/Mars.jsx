import React, { Component } from 'react';


class Mars extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                 <img className="mars" src="https://www.astro-rennes.com/planetes/images/mars/detail_mars.jpg"/>
            <h1 className="color-planets-txt font-size-h1-planets">Mars</h1>
              
                <div className="dad-block-txt-mercury">

                

                    <p className="color-planets-txt block-txt-planets-dsk">
                    
                    </p>

                    <p className="color-planets-txt block-txt-planets-dsk">
                   
                    </p>

                    <p className="color-planets-txt block-txt-planets-dsk">
                        
                    
                                        
                    </p>

                    </div>
            </div>
         );
    }
}
 
export default Mars;