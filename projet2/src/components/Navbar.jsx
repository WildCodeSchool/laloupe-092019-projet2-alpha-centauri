import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            
            <div>
            
            
            <header class="row flex1 height z-index dsk-12 tab-12 mob-12">
            
            
            <div class="background height z-index dsk-12 tab-12 mob-12">
            
            <nav class=" row nav-height z-index height dsk-12 tab-12 mob-12">
            
            <div class="dsk-2 tab-4 mob-4 ">
            <img class="nav-height  dsk-10"
            src="https://files.slack.com/files-pri/T6SG2QGG2-FPK091NRL/logo_transparent.png" />
            </div>
            
            <div class="row navigation z-index order dsk-9 ">
            
            <input class="dsk-0" type="checkbox" name=""/>
            
            <span></span>
            
            <span></span>
            
            <ul class="row columns liststyle z-index menu dsk-12 tab-0 mob-0 ">
            
            <li class="dsk-2 tab-0 mob-0">
            <hr class="line2"/>
            <hr class="line3"/>
            </li>
            <li class="dsk-2 tab-2 mob-2 "> <a href="" class="font-color text-deco-none"> Home </a> </li>
            <li class="dsk-2 tab-2 mob-2"> <a href="" class="font-color text-deco-none"> Planets </a> </li>
            <li class="dsk-3 tab-2 mob-2"><a href="" class="font-color text-deco-none"> Spaceship Rentals </a></li>
            <li class="dsk-2 tab-2 mob-2"><a href="" class="font-color text-deco-none"> Booking </a></li>
            
            <li class="dsk-0 tab-2 mob-2"> <a href=""><i class="fas fa-shopping-basket"></i></a></li>
            <li class="dsk-0 tab-2 mob-2"> <a href=""> <i class="fas fa-user"></i></a></li>
            
            </ul>
            
            </div>
            
            <div class="row flex1 columns dsk-12">
            
            <a href="" class="dsk-6 tab-0 mob-0"> <i class="fas fa-shopping-basket fa-2x font-color "></i></a>
            <a href="" class="dsk-6 tab-0 mob-0"> <i class="fas fa-user font-color fa-2x"></i></a>
            
            </div>
            
            
            
            </nav>
            
            <div class="row justify-content">
            <hr class="line "/>
            
            
            </div>
            
            </div>
            
            </header>
            
            </div>

            );
            
        }
    }
    
    export default Navbar;