import React, { Component } from 'react';
import config from './config.json';


export default class ComplimentGenerator extends Component {

  constructor(props) {
    super(props);
    this.config = config.config;
    this.compliments = this.config.compliments
    this.state = {
        message: this.generateMessage()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000 * 10 * 15
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({message: this.generateMessage()})
  }

  generateMessage(){

    return this.compliments[this.getRandomInt(this.compliments.length)]
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {

    const css = `
      .my-element {
        height:100%;
        display:flex;
        flex-direction:column;
        justify-content:center;
      }

      .my-h1 {
        text-align: center;
      }
    `

    return (
      <div className="my-element">
        <style>{css}</style>
        <h1 className="my-h1">{this.state.message}</h1>
      </div>
    );
  }
}
