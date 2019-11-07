import React, { Component } from 'react';


class Mars extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="mom-block-img">  

                 <img className="mars" src="https://www.astro-rennes.com/planetes/images/mars/detail_mars.jpg"/>

                </div>
            <h1 className="color-planets-txt font-size-h1-planets">Mars</h1>
              
                <div className="dad-block-txt-mercury">

                

                    <p className="color-planets-txt style-border-planet-txt">
                    Mars is the fourth planet from the Sun and the second-smallest planet in the Solar 
                    System after Mercury. In English, Mars carries a name of the Roman god of war and 
                    is often referred to as the 'Red Planet'. The latter refers to the effect of 
                    the iron oxide prevalent on Mars' surface, which gives it a reddish appearance 
                    distinctive among the astronomical bodies visible to the naked eye.
                    Mars is a terrestrial planet with a thin atmosphere, having surface features 
                    reminiscent both of the impact craters of the Moon and the valleys, deserts, 
                    and polar ice caps of Earth.
                    
                    </p>

                    <p className="color-planets-txt style-border-planet-txt">
                    The days and seasons are likewise comparable to those of Earth, 
                    because the rotational period as well as the tilt of the rotational axis 
                    relative to the ecliptic plane are very similar. Mars is the site 
                    of Olympus Mons, the largest volcano and highest known mountain in 
                    the Solar System, and of Valles Marineris, one of the largest canyons 
                    in the Solar System. The smooth Borealis basin in the northern hemisphere 
                    covers 40% of the planet and may be a giant impact feature. Mars has two moons, 
                    Phobos and Deimos, which are small and irregularly shaped. 
                    These may be captured asteroids,e similar to 5261 Eureka, a Mars trojan.
                   
                    </p>

                    <p className="color-planets-txt style-border-planet-txt">
                        
                    Of all the planets in the Solar System, the seasons of Mars are the most Earth-like,
                    due to the similar tilts of the two planets' rotational axes. 
                    The lengths of the Martian seasons are about twice those of Earth's 
                    because Mars's greater distance from the Sun leads to the Martian year 
                    being about two Earth years long. Martian surface temperatures vary from 
                    lows of about −143 °C (−225 °F) at the winter polar caps 
                    to highs of up to 35 °C (95 °F) in equatorial summer. 
                    The wide range in temperatures is due to the thin atmosphere which 
                    cannot store much solar heat, the low atmospheric pressure, and the low 
                    thermal inertia of Martian soil.The planet is 1.52 times 
                    as far from the Sun as Earth, resulting in just 43% of the amount of sunlight.
                                        
                    </p>

                    </div>
            </div>
         );
    }
}
 
export default Mars;