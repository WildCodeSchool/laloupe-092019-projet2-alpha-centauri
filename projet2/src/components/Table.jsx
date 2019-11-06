import React, {Component} from 'react';
import './Table.css';


class Table extends Component {
    constructor(props){
        super(props)
        this.state ={
             planets:[                
                {id:'Venus',price:'1000Buzz',nb:'',weeks:'',groups:'',total:''},
                {id:'Mars',price:'1000Buzz',nb:'',weeks:'',groups:'',total:''},
                {id:'Jupiter',price:'1500Buzz',nb:'',weeks:'',groups:'',total:''},
                {id:'Saturn',price:'2000Buzz',nb:'',weeks:'',groups:'',total:''},
                {id:'Uranus',price:'2500Buzz',nb:'',weeks:'',groups:'',total:''},
                {id:'Neptune',price:'3000Buzz',nb:'',weeks:'',groups:'',total:''},
            ]
        }
        this.handleChange =this.handleChange.bind(this);
    }
    handleChange (event){
        this.ListeningStateChangedEvent(
            {nb: event.target.value},
            {weeks: event.target.value},
            {groups: event.target.value},
            {total: event.target.value})
        }
    
    
    renderTableData(){
        return this.state.planets.map((planet,index)=>{
            const{id, price, nb, weeks, groups,total} = planet
            return(
                <div>                
                <tr key={index}>
                    <td>{id}</td>
                    <td>{price}</td>
                    <td><input id="nb" type="num" value={this.state.nb}/></td>
                    <td><input id="nb" type="num" value={this.state.weeks}/></td>
                    <td><input id="nb" type="num" value={this.state.groups}/></td>
                    <td><input id="total type="num value={this.state.total}/></td>
                </tr>
                </div>
            )
        })               
       
    }
       
    
    render(){
        return(
            <div>
            <div className="containerTable dsk-offset-4 tab-offset-1 mob-0">
                <h1 id='title'>Vacation Packages</h1>
                <table  id='planets'>                    
                <tbody>
                <th> 
                    <td>Planets</td>
                    <td>Price/week</td>  
                    <td>number travellers</td>
                    <td>number of weeks</td>                    
                    <td>groups</td>                    
                    <td>Total</td>
                </th>           
                
                <tr>
                    {this.renderTableData()}
                </tr>
                </tbody>
                </table>
                <a href="./Payment">
                <button className="dsk-offset-5" type="submit">Confirm</button>
                </a>
            </div>

            <div className="selectMob dsk-0 tab-0">
                <h2>Vacation packages</h2>
                
                <div className="MobP">
                    <button className="btnMob mob-offset-4">Venus</button>
                    <p>1000Buzz/week</p>
                    <p>Nb travellers</p>
                    <p>Nb of weeks</p>
                    <p>Groups</p>
                    <p>Total</p>
                </div>
                <div className="MobP">
                    <button className="btnMob mob-offset-4">Mars</button>
                    <p>1000Buzz/week</p>
                    <p>Nb travellers</p>
                    <p>Nb of weeks</p>
                    <p>Groups</p>
                    <p>Total</p>
                </div>
                <div className="MobP">
                    <button className="btnMob mob-offset-4">Jupiter</button>
                    <p>1000Buzz/week</p>
                    <p>Nb travellers</p>
                    <p>Nb of weeks</p>
                    <p>Groups</p>
                    <p>Total</p>
                </div>
                <div className="MobP">
                    <button className="btnMob mob-offset-4">Saturn</button>
                    <p>1000Buzz/week</p>
                    <p>Nb travellers</p>
                    <p>Nb of weeks</p>
                    <p>Groups</p>
                    <p>Total</p>
                </div>
                <div className="MobP">
                    <button className="btnMob mob-offset-4">Uranus</button>
                    <p>1000Buzz/week</p>
                    <p>Nb travellers</p>
                    <p>Nb of weeks</p>
                    <p>Groups</p>
                    <p>Total</p>
                </div>
                <div className="MobP">
                    <button className="btnMob mob-offset-4">Neptune</button>
                    <p>1000Buzz/week</p>
                    <p>Nb travellers</p>
                    <p>Nb of weeks</p>
                    <p>Groups</p>
                    <p>Total</p>
                </div>
            </div>
        </div>
        )
    }

}

export default Table