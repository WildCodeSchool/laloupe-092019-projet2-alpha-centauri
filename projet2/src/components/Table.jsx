import React, { Component } from 'react';
import './Table.css';


class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            planets: [
                { id: 'Venus', price: 1000, nb: 0, weeks: 0, total: 0, visible: true },
                { id: 'Mars', price: 1000, nb: 0, weeks: 0, total: 0, visible: false },
                { id: 'Jupiter', price: 1500, nb: 0, weeks: 0, total: 0, visible: false },
                { id: 'Saturn', price: 2000, nb: 0, weeks: 0, total: 0, visible: false },
                { id: 'Uranus', price: 2500, nb: 0, weeks: 0, total: 0, visible: false },
                { id: 'Neptune', price: 3000, nb: 0, weeks: 0, total: 0, visible: false },
            ]
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let input = event.target;
        let index = input.getAttribute("data-index");
        let prop = input.getAttribute("data-property");
        let value = event.target.value;
        let planets = this.state.planets;
        planets[index][prop] = value;
        planets[index].total = planets[index].weeks * planets[index].nb * planets[index].price;
        this.setState({ planets: planets });
    }

    handleClick = (planet) => {
        let planets = this.state.planets;
        planets.map(cur => (cur == planet) ? cur.visible = !cur.visible : cur.visible = false);
        this.setState({ planets: planets });
    }


    renderTableData() {
        return this.state.planets.map(

            (currentPlanet, index) => {

                return (
                    <div>
                        <tr key={index}>
                            <td>{currentPlanet.id}</td>
                            <td>{currentPlanet.price}</td>
                            <td>
                                <input type="number"
                                    data-property="nb"
                                    data-index={index}
                                    value={currentPlanet.nb}
                                    onChange={this.handleChange} />
                            </td>
                            <td>
                                <input type="number"
                                    data-property="weeks"
                                    data-index={index}
                                    value={currentPlanet.weeks}
                                    onChange={this.handleChange} />
                            </td>
                            <td>
                                {currentPlanet.total}
                            </td>

                        </tr>
                    </div>
                )
            })

    }


    render() {
        console.log(this.state.planets[0].visible)
        return (
            <div>
                <div className="containerTable mob-0">
                    <h1 id='title' className="title dsk-offset-3 tab-offset-2">Vacation Packages</h1>
                    <table id='planets'>
                        <tbody>
                            <th>
                                <td>Planets</td>
                                <td>Price/week</td>
                                <td>number travellers</td>
                                <td>number of weeks</td>
                                <td>Total</td>
                            </th>

                            <tr>
                                {this.renderTableData()}
                            </tr>
                        </tbody>
                    </table>
                    <a href="./Payment">
                        <button className="btnDsk dsk-offset-5 mob-0" type="submit">Confirm</button>
                    </a>
                </div>


                <div className="selectMob dsk-0 tab-0">
                    <h2>Vacation packages</h2>
                    {
                        this.state.planets.map(
                            (planet, index) => {
                                return (
                                    <div className="MobP">
                                        <button onClick={() => this.handleClick(planet)}
                                            className="btnMob mob-offset-4">{planet.id}
                                        </button>
                                        <div id="dropdown_0" className="dropdown" className={planet.visible ? 'dropdown' : 'disappear'}>
                                            <p>1000 Buzz / week</p>
                                            <p>Nb of travellers :
                                            <input type="number"
                                                data-property="nb"
                                                data-index={index}
                                                value={planet.nb}
                                                onChange={this.handleChange} />
                                            </p>
                                            <p>Nb of weeks :
                                                <input  type="number"
                                                        data-property="weeks"
                                                        data-index={index}
                                                        value={planet.weeks}
                                                        onChange={this.handleChange} />
                                            </p>    
                                            <p>Total: {planet.total}</p>                                                                                      
                                        </div>                                                                        
                                                                       
                                    </div>    
                                )
                            }
                        )
                    }
                                    </div>
                                    <div>
                                    <a href="./Payment">
                                        <button className="btnMobConfirm dsk-0 tab-0 mob-offset-4" type="submit">Confirm</button>
                                    </a> 
                                    </div> 
            </div>
        )
    }

}

export default Table