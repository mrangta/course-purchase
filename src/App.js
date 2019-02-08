import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses =[
      {name:'The Complete Web Developer Course 2.0 by Rob Percival', price:199},
      {name:'Angular 5 (formerly Angular 2) – The Complete Guide by Maximilian Schwarzmüller', price:349},
      {name:'Learn and Understand NodeJS by Anthony Alicea', price:209},
      {name: 'The Complete Ruby on Rails Developer Course by Rob Percival & Mashrur Hossain', price:109},
      {name:'Modern React with Redux by Stephen Grider', price:98}
    ]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Purchase New Courses</h2>
        </header>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
