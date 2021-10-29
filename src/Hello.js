import React, { Component } from "react";

export default class Hello extends Component{
    constructor(){
        super();
        this.state = {color: "red", digit: 0, list:[{title:"first"}, {title:"second"}, {title:"third"}]};
    }


    componentDidMount(){
        console.log(this.props.parent_color)
        setTimeout(()=>{
            this.setState({digit:10, color: this.props.parent_color})
        },2000)
        console.log("ComponentDidMount")
    }

    renderLists(){
        return this.state.list.map((item,index)=>{
            return <div key={`${item.title}${index}`}>{item.title}</div>
        });
    }

    render(){
        console.log("render")
        return (
        <div>
        <div onClick={()=>{
            this.setState({color:"yellow"});
        }} 
        style={{backgroundColor:this.state.color}}
        >
            Hello, world!
        </div>
        <div>{this.state.digit}</div>
        {this.renderLists()}
        </div>
        );
    }
}