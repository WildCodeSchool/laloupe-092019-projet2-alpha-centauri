import React, { Component } from 'react';
import './About.css'
import Space from "./image/spaceship_about.jpg"
import Work from  "./image/work_flow.png"
import Family from "./image/family.jpg"
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from "react-visibility-sensor";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            visible: null,
            visibleimg:null
        }
        this.onChangeVisibility = this.onChangeVisibility.bind(this)
        this.onChangeVisibilityimg = this.onChangeVisibilityimg.bind(this)
    }

    onChangeVisibility (isVisible) {
        this.setState({visible: isVisible});
      }
    onChangeVisibilityimg (isVisible) {
        this.setState({visibleimg: isVisible});
      }


    render() { 
        return ( 
            <div>
            <div className="divspaceabout">
            
           
                 <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 1000, duration: 1000 }}
                >
                {props => <div   className="col ">
                <h1 className="neonTitle ">About us</h1>
                <p style={props} className=" text_about talig m-top "><span className="neonTitlered">Launch Yourself !</span>
                </p>
                </div>}
                </Spring>
                
                <hr className="style18"/>
                
                <div className="row_desk m-top tab-col col_mob ">
                <p className="text_about dsk-5 tab-12">Alpha Centauri is a full service global  
                <span className="neonTitlered"> Spaceline</span>, offering year-round low fares with an extensive global route network flying to and from centrally-located spaceport.</p>
                <div className="divimage dsk-6 dsk-offset-1 tab-12">
                <img className="image_resize" src={Space} alt=""/>
                </div>
                </div>
                
                <div className="m-top dsk-12"> <img src={Work} alt=""/></div>
                
                <div className="row_desk m-top col_mob">
                
                <VisibilitySensor onChange={this.onChangeVisibility} active={!this.state.visible} >
                {({ isVisible }) => (
                    <Spring  
               
                    to={{ opacity: isVisible ? 1 : 0 }}
                    >
                    {props =>
                        <div style={props} className="dsk-4 mob-12 tab-12  row_mob tab-row">
                        <span className="neonTitlered mob-12 tab-3"><p className="">Superstrength</p></span>
                        <span className="neonTitlered m-top mob-6 tab-3"><p className="m-topsup m-top0">Purpose</p></span>
                        <span className="neonTitlered m-top mob-6 tab-3"><p className="m-topsup m-top0">Work</p></span>
                        </div>}
                        </Spring>
                        )}
                        </VisibilitySensor>
                        
                        <div className="dsk-8 tab-offset-1">
                        <p className="text_about">We work around the clock to provide the best services for a maximum comfort during your trips. Each of our flights bring joy to trillions of our customer each (Earth) year. </p>
                        </div>
                        </div>
                        
                        <div className="row m-top">
                        <div className="dsk-8"><p className="text_about m-top ">Our teams work hard in order to improve the quality of our services because the priority is  <span className="neonTitlered">you</span> ! </p></div>
                        <VisibilitySensor onChange={this.onChangeVisibilityimg} active={!this.state.visibleimg}  partialVisibility={true} minTopValue={200}>
                        {({ isVisible }) => (
                            <Spring   
                            to={{ opacity: isVisible ? 1 : 0 }}>
                            {props =>
                                <div style={props} className="dsk-6 dsk-offset-1 m-top"> <img className="image_resize" src={Family} alt=""/></div>
                            }
                            </Spring>
                            )}
                            </VisibilitySensor>
                            </div>
                            
                            </div>
                            
                            </div>
                            
                            );
                        }
                    }
                    
                    export default About;
                    
                    
                    