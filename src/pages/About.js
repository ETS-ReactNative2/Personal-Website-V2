import React, { Component, setState } from 'react';
import './About.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
// import 'react-tabs/style/react-tabs.css'
import arjun from '../graphics/rsz_arjun.jpg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Projectcard from '../components/Projectcard/Projectcard'
import Winecard from '../components/Winecard/Winecard'
import wineOne from '../graphics/wine1.png'
import wineTwo from '../graphics/wine2.png'
import wineThree from '../graphics/wine3.png'
import wineFour from '../graphics/wine4.png'
import zeroToOne from '../graphics/zeroone.jpg'
import sirens from '../graphics/sirensOfTitan.jpg'
import badblood from '../graphics/badblood.jpg'
import sapiens from '../graphics/sapiens.jpg'
import confessions from '../graphics/confessions.jpeg'

class About extends Component {

  constructor (props) {
    super(props)
    this.state = { tabIndex: 0 }
    this.changeTabIndex = this.changeTabIndex.bind(this)
  }

  changeTabIndex (idx) {
    this.setState({ tabIndex: idx })
    return true
  }

  render () {
    return (
      <div className='Page'>
        <div id='IntroSection'>
          <div id='About'>
            <div id='text'>
              <h1>Arjun Bhalla</h1>
              <p className='accentText'>Hello! I'm Arjun, a Cornell Computer Science graduate. I am currently interning part-time as a Software Engineer at a medical tech startup called <a href='https://www.enroute.digital' target='blank' className='inTextExternalLink'> enroute </a>, and am full-time attending Cornell Tech to pursue my Masters in Computer Science.
              <br /><br />
              My primary interests are in Machine Learning and Distributed Systems, and one of many problems that currently interest me is looking at how Cloud Architectures can be leveraged to provide efficient ML services for IoT devices. In the past, I've done some class and independent project work on NLP and Recommendation Systems, Game playing AI, and have done research with Professor Thorsten Joachims on Counterfactual Machine Learning.
              <br /> <br />
              Please explore the rest of my website to learn about my projects and various interests! Outside of Computer Science, I have a wide array of interests, from golf to travelling and experiencing new cultures. I also really enjoy <a href='#interests' className='inTextLink' onClick={() => this.changeTabIndex(0)}>reading</a>, exploring <a href='#interests' className='inTextLink' onClick={() => this.changeTabIndex(1)}>wine and cooking</a>, listening to, and composing <a href='#interests' className='inTextLink' onClick={() => this.changeTabIndex(2)}>music</a>.
              </p>
              <br />
            </div>
            <div id='photo'><img src={arjun} id='ProfilePic' />
            </div>
          </div>
          {/* <div class='astrodivider'><div class='astrodividermask' /><span /></div> */}
          <div id='Projects'>
            <div id='ProjectsContainer'>
              <h2>Select Projects + Research</h2>
              <div id='ProjectsCarousel'>
                {/* <AliceCarousel autoPlay autoPlayInterval='4000'> */}
                  <Projectcard className='sliderimg' title='Fall Detector' date='Spring 2020' description='An IoT System for Automated Fall Detection in Smart Homes.' link='https://github.com/benjaminmposnick/Fall-Detector' />
                  <Projectcard title='Simulated B-Tree DHT' date='Spring 2020' description='Built a simulated Distributed Hash Table with B-Tree structure (private repo).' link='https://github.com/ArjunBhalla98' />
                  <Projectcard title="Neural Models Research" date="Spring 2019" description="A project investigating dropout for neural abstractive text summarisation." link="http://www.cs.cornell.edu/people/tj/publications/wang_etal_19a.pdf" />
                  <Projectcard title="BLBF Regression Paper" date="Spring 2019" description="A paper on Regression models to model learning bias. Accepted to ICML 2019." link="http://www.cs.cornell.edu/people/tj/publications/wang_etal_19a.pdf" />
                {/* </AliceCarousel> */}
              </div>
            </div>
          </div>
        </div>

        <div id='interests'>
          <div id='interestTabs'>
            <Tabs selectedIndex={this.state.tabIndex} onSelect={index => this.setState({ tabIndex: index })}>
              <TabList>
                <Tab>Books</Tab>
                <Tab>Wine</Tab>
                <Tab>Music</Tab>
              </TabList>

              <TabPanel>
                <div id='BooksContainer'>
                  <h2>Some of my Favourite Books</h2>
                  <p className='accentText'>One of my main hobbies is reading - I like different kinds of books, but here are some of my favourites!</p>
                  <div id='booksDiv'>
                    <img src={badblood} className='bookImage' />
                    <img src={sapiens} className='bookImage' />
                    <img src={zeroToOne} className='bookImage' />
                    <img src={sirens} className='bookImage' />
                    <img src={confessions} className='bookImage' />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div id='WineRecsContainer'>
                  <h2>My Top Value Wine Picks</h2>
                  <p className='accentText'>Since I took the wines class at Cornell, I've been pretty interested in learning about and tasting a host of different wines. I also like to try my hand at pairing whatever I have with the things that I cook. Have a look at some of my top picks for great value wines!</p>
                  <div id='wineCarousel'>
                    <button id='prevButton' className='sliderButton' onClick={() => this.Carousel.slidePrev()}>&#8249;</button>
                    <div id='carouselWrapper'>
                    <AliceCarousel autoPlay autoPlayInterval='6000' dotsDisabled={true} buttonsDisabled={true} ref={(el) => { this.Carousel = el }}>
                      <Winecard title='Donnhoff, Niederhauser Klamm Riesling Kabinett 2018' image={wineFour} region='Nahe, Germany' description='This is a brilliant Riesling from a pretty well known German producer in the Nahe. It was bright, delicious, acidic, and top of the line for me when it comes to dry German Riesling. Amazing value - I found a lot of dry German Rieslings (like Peter Jakob Kuhn) to be bone dry, almost aggressively so, but Donnhoff is perfectly balanced, and cheap(ish) too!' />
                      
                      <Winecard title='Chateau Leoville Barton 1997' image={wineOne} region='St. Julien, Bordeaux, France' description='I had the pleasure of trying both this and the 2014 during a tasting event at Cornell. This blew me away and struck me as a top 3 for the (12+ Chateaux) tasting. This may not be value in the traditional sense, as it is certainly outside my normal buying price range by quite a few standard deviations, but it is excellent and good value for money nonetheless and I thought I should include it.' />

                      <Winecard title='Monasterio De Las Vinas 2019' image={wineTwo} region='Carinena, Spain' description='Grenache dominated Tempranillo blend from a less known appellation in Northern Spain, just south of Rioja. A young, fun, interesting wine. I had this with grilled burgers and it went really well. I really liked that the tannin was not gripping, but more velvety.' />

                      <Winecard title='Dautel Spatburgunder 2017' image={wineThree} region='Wuttemberg, Germany' description='Incredibly balanced German Pinot Noir. Thoroughly enjoyed drinking this powerhouse, only wish I had paired it with something, despite it being fantastic on its own.' />

                    </AliceCarousel>
                    </div>
                    <button id='nextButton' className='sliderButton' onClick={() => this.Carousel.slideNext()}>&#8250;</button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div id='MusicContainer'>
                  <h2>My Musical Interests</h2>
                  <p>Here is one of my favourite personal playlists on Spotify - I'll be adding some of my original compositions and recordings here soon!</p>
                  <div id='SpotifyContainer'>
                    <iframe src="https://open.spotify.com/embed/playlist/11SoUrRUhBjypzRCSbcK4y" width="300" height="300" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                    {/* <iframe src="https://open.spotify.com/follow/1/?uri=spotify:user:2135h4s7ygirhuzfsmsz2ldfi&size=detail&theme=dark" width="300" height="56" scrolling="no" frameBorder="0" style={{ allowtransparency:true}}></iframe> */}
                  </div>
              </div>
            </TabPanel>
            </Tabs>
          </div>
        </div>

      <div id='footer'>
        <div id='mediaDiv'>
          <ul id='media'>
              <li><a href='https://drive.google.com/file/d/1nrCmALWZVaAwXNYli2l0QoMl4IjFAz6r/view?usp=sharing' target='blank'>Resumé</a></li>
              <li><a href='https://www.linkedin.com/in/ab-98' target='blank'>LinkedIn</a></li>
              <li><a href='https://www.github.com/ArjunBhalla98' target='blank'>GitHub</a></li>
              <li><a href='mailto:ab2383@cornell.edu'>Email</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default About
