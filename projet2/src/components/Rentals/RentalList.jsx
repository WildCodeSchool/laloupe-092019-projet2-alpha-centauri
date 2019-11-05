import React, { Component } from 'react';
import Rentals from './Rentals'


const ListSpaceship = [{
    
    title:'Space Love',
    description:'A spaceship for two people in love. Cosy, intimate and perfect for honeymoons. Take your lover (or lovers) across the galaxy and beyond...! Party to all spacestations of your liking and try the new bathtub in the back of the ship. ',
    image:'https://lumiere-a.akamaihd.net/v1/images/vaders-tie-fighter_8bcb92e1.jpeg?region=0%2C147%2C1560%2C878&width=960',
    price:10000
    
},

{
    title:'Saturn V',
    description:'Do you love history? We ask because we put at your disposal a faithful reproduction of Saturn V. Of course not exactly... you can still go to Pluto in less than one hour. However who wouldn\'t like to take the place of Neil Armstrong',
    image:'https://guinnessworldrecords.com/Images/Saturn-V_tcm25-546849.jpg',
    price:80500
    
},

{
    title:'Serenity',
    description:'Your have an important meeting across the galaxy? Do not worry we have for you Serenity, one of the fastest spaceship in the entire galaxy. no stress on board when you can drink Martini as much as you want!',
    image:'https://c4.wallpaperflare.com/wallpaper/372/74/506/serenity-firefly-gray-and-blue-spaceship-wallpaper-preview.jpg',
    price:120000
    
},

{
    title:'Space Cruiser',
    description:'Since immortality has become available across the galaxy, who doesn\'t have thousands of grandchildren? Space cruiser has enough room for your entire family and makes family trips so much easier!',
    image:'https://vignette.wikia.nocookie.net/starwars/images/a/a9/Chimaera_Exp_Pack_box_art_crop.png/revision/latest?cb=20180107220339',
    price:10000000
    
}

];

const RentalList = () => (
    
    // ListSpaceship.map(info =>
    // <Rentals
    // {...info}
    // />
       ListSpaceship.map(info =>
    <Rentals
    {...info}
    />
    )
    
    )
    
    export default RentalList ;