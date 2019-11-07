import React, { Component } from 'react';


class Venus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>

            <img className="venus" src="https://www.astro-rennes.com/planetes/images/venus/detail_venus.jpg" />
            
            <h1 className="color-planets-txt font-size-h1-planets">Venus</h1>
              
                <div className="dad-block-txt-mercury">

                

                    <p className="color-planets-txt block-txt-planets-dsk">
                    Venus is the second planet from the Sun.
                    It is named after the Roman goddess of love and beauty. As the second-brightest natural
                    object in the night sky after the Moon, Venus can cast shadows and, rarely, is visible
                    to the naked eye in broad daylight. Venus lies within Earth's orbit, and so never
                    appears to venture far from the Sun, setting in the west just after dusk and rising in
                    the east a bit before dawn. Venus orbits the Sun every 224.7 Earth days. With a 
                    rotation period of 243 Earth days, it takes longer to rotate about its axis than any
                    planet in the Solar System and goes in the opposite direction to all but Uranus
                    (meaning the Sun rises in the west and sets in the east).Venus does not have any natural
                    satellites, a distinction it shares only with Mercury among planets in the Solar System.
                    </p>

                    <p className="color-planets-txt block-txt-planets-dsk">
                    Venus is a terrestrial planet and is sometimes called Earth's "sister planet"
                    because of their similar size, mass, proximity to the Sun, and bulk composition.
                    It is radically different from Earth in other respects. It has the densest atmosphere 
                    of the four terrestrial planets, consisting of more than 96% carbon dioxide. 
                    The atmospheric pressure at the planet's surface is 92 times that of Earth, 
                    or roughly the pressure found 900 m (3,000 ft) underwater on Earth. Venus is by far 
                    the hottest planet in the Solar System, with a mean surface temperature of 735 K 
                    (462 °C; 863 °F), even though Mercury is closer to the Sun. 
                       
                    </p>

                    <p className="color-planets-txt block-txt-planets-dsk">
                        
                    Without seismic data or knowledge of its moment of inertia, little direct 
                    information is available about the internal structure and geochemistry of Venus.
                    The similarity in size and density between Venus and Earth suggests they share 
                    a similar internal structure: a core, mantle, and crust. Like that of Earth, 
                    the Venusian core is at least partially liquid because the two planets have been 
                    cooling at about the same rate.The slightly smaller size of Venus means 
                    pressures are 24% lower in its deep interior than Earth's.The principal difference 
                    between the two planets is the lack of evidence for plate tectonics on Venus, 
                    possibly because its crust is too strong to subduct without water to make it less 
                    viscous. This results in reduced heat loss from the planet, preventing it from 
                    cooling and providing a likely explanation for its lack of an internally 
                    generated magnetic field. Instead, Venus may lose its internal heat in periodic 
                    major resurfacing events.
                                        
                    </p>

                    </div>
                </div>
         );
    }
}
 
export default Venus;