import React, { Component } from 'react';

class Neptune extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>


            <div className="mom-block-img">

            <img className="neptune" src="https://www.astro-rennes.com/planetes/images/neptune/detail_neptune.jpg"/>

            </div>

            <h1 className="color-planets-txt font-size-h1-planets">Neptune</h1>

              
                <div className="dad-block-txt-mercury">

                

                    <p className="color-planets-txt style-border-planet-txt">


                    Neptune is the eighth and farthest known planet from the Sun in the Solar System. 
                    In the Solar System, it is the fourth-largest planet by diameter, 
                    the third-most-massive planet, and the densest giant planet. 
                    Neptune is 17 times the mass of Earth, slightly more massive than its near-twin 
                    Uranus. Neptune is denser and physically smaller than Uranus because 
                    its greater mass causes more gravitational compression of its atmosphere. 
                    Neptune orbits the Sun once every 164.8 years at an average distance 
                    of 30.1 au (4.5 billion km; 2.8 billion mi). 
                    It is named after the Roman god of the sea and has the astronomical symbol ♆, 
                    a stylised version of the god Neptune's trident.

                    
                    </p>

                    <p className="color-planets-txt style-border-planet-txt">

                    Like Jupiter and Saturn, Neptune's atmosphere is composed primarily of 
                    hydrogen and helium, along with traces of hydrocarbons and possibly nitrogen, 
                    though it contains a higher proportion of "ices" such as water, ammonia and methane. 
                    However, similar to Uranus, its interior is primarily composed of ices and rock; 
                    Uranus and Neptune are normally considered "ice giants" to emphasise this distinction. 
                    Traces of methane in the outermost regions in part account for the planet's blue appearance.
     
                    </p>

                    <p className="color-planets-txt style-border-planet-txt">
                        

                    These weather patterns are driven by the strongest sustained winds 
                    of any planet in the Solar System, with recorded wind speeds as high as 2,100 km/h 
                    (580 m/s; 1,300 mph). Because of its great distance from the Sun, Neptune's 
                    outer atmosphere is one of the coldest places in the Solar System, 
                    with temperatures at its cloud tops approaching 55 K (−218 °C; −361 °F). 
                    Temperatures at the planet's centre are approximately 5,400 K (5,100 °C; 9,300 °F).
                    Neptune has a faint and fragmented ring system (labelled "arcs"), 
                    which was discovered in 1984, then later confirmed by Voyager 2.

                                        
                    </p>

                    </div>
            </div>
         );
    }
}
 
export default Neptune;