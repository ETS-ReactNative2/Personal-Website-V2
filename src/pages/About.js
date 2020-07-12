import React,{Component} from 'react';
import './About.css';
import Headbar from '../components/Headbar/Headbar';
import Sidebar from '../components/Sidebar/Sidebar';
import arjun from '../graphics/rsz_arjun.jpg';

class About extends Component
{
  render()
  {
    return (
      <div className="Page">
        <div id="About">
          <div id="text">
            <h1>Arjun Bhalla</h1>
            <p>Hi! I'm Arjun, a Spring 2020 Computer Science graduate from <span>Cornell University</span>.
            In Fall 2020, I'll be attending <span>Cornell Tech</span> in NYC to get my <span>Masters in Computer Science</span>.
            <br /><br />
            My primary interests are in Machine Learning and Distributed Systems, specifically looking at how Cloud Architectures can be leveraged to provide efficient ML services for IoT devices, often in places with little connectivity.
            Feel free to explore the rest of my website to learn about my projects and various interests!
            </p>
            <br />
            <ul id="media">
              <li><a href="https://www.linkedin.com/in/ab-98" target="blank">LinkedIn</a></li>
              <li><a href="https://www.github.com/ArjunBhalla98" target="blank">GitHub</a></li>
              <li><a href="">Resume</a></li>
              <li><a href="mailto:ab2383@cornell.edu">Email</a></li>
            </ul>
          </div>
          <div id="photo"><img src={arjun} id="ProfilePic" /></div>
        </div>
      </div>
    );
  }
}

export default About;
