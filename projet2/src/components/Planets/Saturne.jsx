import React, { Component } from 'react';

class Saturne extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                      
            <div className="mom-block-img">

            <img className="saturne" src="https://www.astro-rennes.com/planetes/images/saturne/detail_saturne.jpg"/>

            </div>


            <h1 className="color-planets-txt font-size-h1-planets">Saturn</h1>
              
                <div className="dad-block-txt-mercury">

                

                    <p className="color-planets-txt style-border-planet-txt">

                    Saturn is the sixth planet from the Sun and the second-largest in the Solar System, 
                    after Jupiter. It is a gas giant with an average radius about nine times 
                    that of Earth. It has only one-eighth the average density of Earth; however, 
                    with its larger volume, Saturn is over 95 times more massive. 
                    Saturn is named after the Roman god of wealth and agriculture; 
                    its astronomical symbol (♄) represents the god's sickle.
                    Saturn's interior is most likely composed of a core of iron–nickel 
                    and rock (silicon and oxygen compounds). 
                    This core is surrounded by a deep layer of metallic hydrogen, 
                    an intermediate layer of liquid hydrogen and liquid helium, and finally 
                    a gaseous outer layer. Saturn has a pale yellow hue due to ammonia crystals 
                    in its upper atmosphere. An electrical current within the metallic hydrogen 
                    layer is thought to give rise to Saturn's planetary magnetic field, 
                    which is weaker than Earth's, but has a magnetic moment 580 times that of Earth 
                    due to Saturn's larger size. Saturn's magnetic field strength is around 
                    one-twentieth of Jupiter's. The outer atmosphere is generally bland 
                    and lacking in contrast, although long-lived features can appear.
                    
                    </p>

                    <p className="color-planets-txt style-border-planet-txt">
                   
                    The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% 
                    helium by volume.The proportion of helium is significantly deficient compared 
                    to the abundance of this element in the Sun.
                    The quantity of elements heavier than helium (metallicity) is not known precisely, 
                    but the proportions are assumed to match the primordial abundances 
                    from the formation of the Solar System. The total mass of these heavier elements 
                    is estimated to be 19–31 times the mass of the Earth, with a significant 
                    fraction located in Saturn's core region.
                    Trace amounts of ammonia, acetylene, ethane, propane, phosphine and methane 
                    have been detected in Saturn's atmosphere. 
                    The upper clouds are composed of ammonia crystals, while the lower level 
                    clouds appear to consist of either ammonium hydrosulfide (NH4SH) or water.

                    </p>

                    <p className="color-planets-txt style-border-planet-txt">
                        
                    Due to its distance from the Sun, Saturn is a rather cold gas giant planet, 
                    with an average temperature of -178 °Celsius. But because of Saturn's tilt, 
                    the southern and northern hemispheres are heated differently, 
                    causing seasonal temperature variation.
                                        
                    </p>

                    </div>
            </div>
         );
    }
}
 
export default Saturne;