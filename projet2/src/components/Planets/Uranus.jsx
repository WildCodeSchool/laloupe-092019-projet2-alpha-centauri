import React, { Component } from 'react';

class Uranus extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }


    render() {
        return (
            <div>


            <div className="mom-block-img">

                <img className="uranus" src="https://www.astro-rennes.com/planetes/images/uranus/detail_uranus.jpg"/>

            </div>
            
            <h1 className="color-planets-txt font-size-h1-planets">Uranus</h1>
              
                <div className="dad-block-txt-mercury">

                

                    <p className="color-planets-txt style-border-planet-txt">
                    
                    Uranus is the seventh planet from the Sun. It has the third-largest planetary 
                    radius and fourth-largest planetary mass in the Solar System. 
                    Uranus is similar in composition to Neptune, and both have bulk chemical 
                    compositions which differ from that of the larger gas giants Jupiter and Saturn. 
                    For this reason, scientists often classify Uranus and Neptune as "ice giants" 
                    to distinguish them from the gas giants. Uranus' atmosphere is similar to 
                    Jupiter's and Saturn's in its primary composition of hydrogen and helium, 
                    but it contains more "ices" such as water, ammonia, and methane, along with 
                    traces of other hydrocarbons.The interior of Uranus is mainly 
                    composed of ices and rock.

                    </p>

                    <p className="color-planets-txt style-border-planet-txt">

                    The composition of Uranus' atmosphere is different from its bulk, 
                    consisting mainly of molecular hydrogen and helium. 
                    The helium molar fraction, i.e. the number of helium atoms per molecule of gas, 
                    is 0.15±0.03 in the upper troposphere, which corresponds to a mass fraction 
                    0.26±0.05. This value is close to the protosolar helium 
                    mass fraction of 0.275±0.01, indicating that helium has not settled 
                    in its centre as it has in the gas giants.
                    The third-most-abundant component of Uranus' atmosphere is methane (CH 4).
                    Methane has prominent absorption bands in the visible and near-infrared (IR), 
                    making Uranus aquamarine or cyan in colour. 
                    Methane molecules account for 2.3% of the atmosphere by molar 
                    fraction below the methane cloud deck at the pressure level of 1.3 bar 
                    (130 kPa); this represents about 20 to 30 times the carbon abundance 
                    found in the Sun.

                   
                    </p>

                    <p className="color-planets-txt style-border-planet-txt">
                        
                    It has the coldest planetary atmosphere in the Solar System, with a minimum 
                    temperature of 49 K (−224 °C; −371 °F), and has a complex, 
                    layered cloud structure with water thought to make up the lowest clouds and methane 
                    the uppermost layer of clouds. The interior of Uranus is mainly composed of ices and rock.
                                        
                    </p>

                    </div>
            </div>
        );
    }


}

export default Uranus;