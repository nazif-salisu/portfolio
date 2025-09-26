import React from 'react';
import './Websites.css';
import uiDesign from '../../Assets/uiDesign.jpg';

const Apps = () => {
  return (
    <section id='myApps'>
        <span className='myAppsTitle'>My Projects</span>
        <span className='myAppsDesc'>List of my personal projects completed:</span>
        <div className='myAppsBars'>
            <div className='myAppsBar'>
                <div className='myAppsText'>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum Dolor Sit Amet</p>
                  <a href='/'>
                    <button className='xbtn'>Explore</button>
                  </a>
                </div>
            </div>
            <div className='myAppsBar'>
                <div className='myAppsText'>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum Dolor Sit Amet</p>
                  <a href='/'>
                    <button className='xbtn'>Explore</button>
                  </a>
                </div>
            </div>
            <div className='myAppsBar'>
                <div className='myAppsText'>
                  <h2>Lorem Ipsum</h2>
                  <p>Lorem Ipsum Dolor Sit Amet</p>
                  <a href='/'>
                    <button className='xbtn'>Explore</button>
                  </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Apps;
