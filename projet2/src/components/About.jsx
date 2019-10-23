import React, { Component } from 'react';
import './About.css'
import Space from "./image/spaceship_about.jpg"
import Work from  "./image/work_flow.png"
import Family from "./image/family.jpg"

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
<div>
<div className="divspace">
    <div className="col">
    <h1 className="neonTitle ">About us</h1>
    <p className=" text_about talig m-top "><span className="neonTitlered"> Launch Yourself !</span>
</p>
</div>

<div className="row m-top row_col">
    <p className="text_about dsk-6 tab-6">Alpha Centauri is a full service global <span className="neonTitlered">Spaceline</span>, offering year-round low fares with an extensive global route network flying to and from centrally-located spaceport.</p>
    <div className="divimage dsk-6 tab-6">
    <img className="image_resize" src={Space} alt=""/>
    </div>
</div>

<div className="m-top dsk-12"> <img src={Work} alt=""/></div>

<div className="row m-top row_col">
<div className="dsk-4 mob-12 row_mob">
<span className="neonTitlered mob-12"><p className="">Superstrength</p></span>
<span className="neonTitlered m-top mob-6"><p className="m-topsup">Purpose</p></span>
<span className="neonTitlered m-top mob-6"><p className="m-topsup">Work</p></span>
</div>

<div className="dsk-8 tab-offset-1">
    <p className="text_about">We work around the clock to provide the best services for a maximum comfort during your trips. Each of our flights bring joy to trillions of our customer each (Earth) year. </p>
</div>
</div>

<div>
    <div><p className="text_about m-top">Our teams work hard in order to improve the quality of our services because the priority is  <span className="neonTitlered">you</span> ! </p></div>
    <div className="dsk-offset-2 dsk-8 m-top"> <img className="image_resize" src={Family} alt=""/></div>
</div>

</div>

</div>

         );
    }
}
 
export default About;


