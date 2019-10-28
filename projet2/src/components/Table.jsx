import React, {Component} from 'react';
import './Table.css';

class Table extends Component {
    constructor(props){
        super(props)
        this.state ={
            planets: [
                {id:'Planets',price:'Price per week',nb:'number travellers',weeks:'number of weeks',groups:'>10 travellers'},
                {id:'Venus',price:'',nb:'',weeks:'',groups:''},
                {id:'Mars',price:'',nb:'',weeks:'',groups:''},
                {id:'Jupiter',price:'',nb:'',weeks:'',groups:''},
                {id:'Saturn',price:'',nb:'',weeks:'',groups:''},
                {id:'Uranus',price:'',nb:'',weeks:'',groups:''},
                {id:'Neptune',price:'',nb:'',weeks:'',groups:''},
            ]
        }
    }
    renderTableHeader(){
        let header = Object.keys(this.state.planets[0])
        return header.map((key,index)=>{
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }
    renderTableData(){
        return this.state.planets.map((planet,index)=>{
            const{id, price, nb, weeks, groups} = planet
            return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{price}</td>
                    <td>{nb}</td>
                    <td>{weeks}</td>
                    <td>{groups}</td>
                </tr>
            )
        })               
       
    }
    render(){
        return(
            <div class="dsk-offset-6{margin-left:50%">
                <h1 id='title'>Vacation Packages</h1>
                <table id='planets'>
                    <tbody>
                        <tr>{this.renderTableHeader}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table