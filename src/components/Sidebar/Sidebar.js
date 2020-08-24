import React,{Component} from 'react';
import {NavLink,BrowserRouter,Switch,Route} from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component
{
    render()
    {
        return (
            <div id="SideBar">
                <div id="ElementsContainer">
                    <ul id="NavLinksList">
                        <li><NavLink exact to="/" className="linkButton" activeClassName="activeLink">Home</NavLink></li>
                        <li><NavLink to="/projects" className="linkButton" activeClassName="activeLink">Projects & Publications</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
}



export default Sidebar;
