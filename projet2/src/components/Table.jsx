import React, {Component} from 'react';
import './Table.css';


class Table extends Component {
    constructor(props){
        super(props)
        this.state ={
             planets:[                
                {id:'Venus',price:'1000Buzz',nb:'',weeks:'',groups:''},
                {id:'Mars',price:'1000Buzz',nb:'',weeks:'',groups:''},
                {id:'Jupiter',price:'1500Buzz',nb:'',weeks:'',groups:''},
                {id:'Saturn',price:'2000Buzz',nb:'',weeks:'',groups:''},
                {id:'Uranus',price:'2500Buzz',nb:'',weeks:'',groups:''},
                {id:'Neptune',price:'3000Buzz',nb:'',weeks:'',groups:''},
            ]
        }
        this.handleChange =this.handleChange.bind(this);
    }
    handleChange (event){
        this.ListeningStateChangedEvent(
            {nb: event.target.value},
            {weeks: event.target.value},
            {groups: event.target.value})}

    
    renderTableData(){
        return this.state.planets.map((planet,index)=>{
            const{id, price, nb, weeks, groups} = planet
            return(
                <div>                
                <tr key={index}>
                    <td>{id}</td>
                    <td>{price}</td>
                    <td><input id="nb" type="num" value={this.state.nb}/></td>
                    <td><input id="nb" type="num" value={this.state.weeks}/></td>
                    <td><input id="nb" type="num" value={this.state.groups}/></td>
                </tr>
                </div>
            )
        })               
       
    }
    render(){
        return(
            <div class="container dsk-offset-3 dsk-6 ">
                <h1 id='title'>Vacation Packages</h1>
                <table id='planets'>                    
                <tbody>
                <th>   
                    <td>number travellers</td>
                    <td>number of weeks</td>
                    <td>Planets</td>
                    <td>groups >10 travellers</td>
                    <td>Price per week</td>
                </th>           
                
                <tr>
                    {this.renderTableData()}
                </tr>
                </tbody>
                </table>
                <a href="./Payment">
                <button class="dsk-offset-10" type="submit">Confirm</button>
                </a>
            </div>
        )
    }
}

export default Table