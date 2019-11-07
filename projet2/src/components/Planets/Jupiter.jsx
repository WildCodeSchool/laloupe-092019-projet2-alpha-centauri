import React, { Component } from 'react';

class Jupiter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>

            <div className="mom-block-img">


            <img className="jupiter" src="https://www.astro-rennes.com/planetes/images/jupiter/detail_jupiter.jpg"/>


            </div>



            <h1 className="color-planets-txt font-size-h1-planets">Jupiter</h1>
              
                <div className="dad-block-txt-mercury">

                

                    <p className="color-planets-txt style-border-planet-txt">

                    Jupiter is the fifth planet from the Sun and the largest in the Solar System. 
                    It is a gas giant with a mass one-thousandth that of the Sun, 
                    but two-and-a-half times that of all the other planets in the Solar System combined. 
                    Jupiter has been known to astronomers since antiquity.
                    It is named after the Roman god Jupiter. When viewed from Earth, 
                    Jupiter can be bright enough for its reflected light to cast shadows, 
                    and is on average the third-brightest 
                    natural object in the night sky after the Moon and Venus.
                    
                    Jupiter is primarily composed of hydrogen with a quarter of its mass being helium, 
                    though helium comprises only about a tenth of the number of molecules. 
                    It may also have a rocky core of heavier elements,
                    but like the other giant planets, Jupiter lacks a well-defined solid surface. 
                    Because of its rapid rotation, the planet's shape is that of an oblate spheroid 
                    (it has a slight but noticeable bulge around the equator). 
                    
                    </p>

                    <p className="color-planets-txt style-border-planet-txt">

                    Jupiter's upper atmosphere is about 88–92% hydrogen and 8–12% helium by percent volume 
                    of gas molecules. A helium atom has about four times as much mass as a hydrogen atom, 
                    so the composition changes when described as the proportion of mass contributed by 
                    different atoms. Thus, Jupiter's atmosphere is approximately 75% hydrogen and 24% 
                    helium by mass, with the remaining one percent of the mass consisting of other elements. 
                    The atmosphere contains trace amounts of methane, water vapor, ammonia, 
                    and silicon-based compounds. There are also traces of carbon, ethane, hydrogen sulfide, 
                    neon, oxygen, phosphine, and sulfur. The outermost layer of the atmosphere contains 
                    crystals of frozen ammonia. The interior contains denser materials—by mass it is 
                    roughly 71% hydrogen, 24% helium, and 5% other elements. 
                    Through infrared and ultraviolet measurements, trace amounts of benzene and other 
                    hydrocarbons have also been found.
                   
                    </p>

                    <p className="color-planets-txt style-border-planet-txt">
                        
                    The temperature and pressure inside Jupiter increase steadily toward the core, 
                    due to the Kelvin–Helmholtz mechanism. At the pressure level of 10 bars (1 MPa), 
                    the temperature is around 340 K (67 °C; 152 °F). 
                    At the phase transition region where hydrogen—heated beyond its critical 
                    point—becomes metallic, it is calculated the temperature is 10,000 K 
                    (9,700 °C; 17,500 °F) and the pressure is 200 GPa. 
                    The temperature at the core boundary is estimated to be 36,000 K 
                    (35,700 °C; 64,300 °F) and the interior pressure is roughly 3,000–4,500 GPa.
                                        
                    </p>

                    </div>
            </div>
         );
    }
}
 
export default Jupiter;