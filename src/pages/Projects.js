import React,{Component} from 'react';
import './Projects.css';
import Projectcard from '../components/Projectcard/Projectcard'
import {withRouter} from 'react-router-dom';

class Projects extends Component
{
    render()
    {
        return (
            <div className="Page">
                <div className="Projects">
                    <h1>Projects and Publications</h1>
                    <div id="cardContainer">
                        <Projectcard title="Fall Detector" date="Spring 2020" description="An IoT System for Automated Fall Detection in Smart Homes." link="https://github.com/benjaminmposnick/Fall-Detector" />
                        <Projectcard title="Simulated B-Tree DHT" date="Spring 2020" description="Built a simulated Distributed Hash Table with B-Tree structure (private repo)." link="https://github.com/ArjunBhalla98" />
                        <Projectcard title="News Summariser" date="Fall 2019 - Spring 2020" description="A News Summarisation tool which collates articles from different sources." link="https://arjunbhalla98.github.io/News-Summariser" />
                        <Projectcard title="Neural Models Research" date="Spring 2019" description="A project investigating dropout for neural abstractive text summarisation." link="http://www.cs.cornell.edu/people/tj/publications/wang_etal_19a.pdf" />
                        <Projectcard title="BLBF Regression Paper" date="Spring 2019" description="A paper on Regression models to model learning bias. Accepted to ICML 2019." link="http://www.cs.cornell.edu/people/tj/publications/wang_etal_19a.pdf" />
                        <Projectcard title="Fire And Shadow" date="Fall 2018" description="A Python based, wave survival/ pseudo tower-defence video game." link="https://github.com/Glitched/Fire-Shadow" />
                        <Projectcard title="K-Means Clustering" date="Summer 2018" description="An interactive, graphical visualization of K-Means Clustering." link="https://github.com/ArjunBhalla98/K-Means-Clustering" />
                        <Projectcard title="ChessKit- Chess AI" date="Spring 2018" description="A Chess playing AI which incorporates classical and ML approaches." link="https://github.com/ArjunBhalla98/Chess-AI" />
                        <Projectcard title="Comparacter" date="Spring 2018" description="A character based movie recommendation engine." link="https://comparacter.herokuapp.com/" />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Projects);
