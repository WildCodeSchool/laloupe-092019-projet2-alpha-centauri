import React, { Component } from 'react';
import Rentals from './Rentals'


const ListSpaceship = [{
    
    title:'',
    description:'',
    image:'',
    price:0
    
},

{
    title:'',
    description:'',
    image:'',
    price:0
    
},

{
    title:'',
    description:'',
    image:'',
    price:0
    
},

{
    title:'',
    description:'',
    image:'',
    price:0
    
}

];

const RentalList = () => (
    ListSpaceship.map(props =>(
    <Rentals
    title = {props.title}
    key = {props.title}
    description = {props.description}
    image = {props.image}
    price = {props.price}
    />
    )
    )
    )
    
    export default RentalList ;