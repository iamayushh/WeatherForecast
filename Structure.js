import React, { Component } from 'react';
import {Component1,Datee,Tempp}from './Component';
import Moment from 'react-moment';


import Imagedata from './ImageData';



import './Styling.css';





class Structure extends React.Component {
    state={
        data:undefined
      }
      componentDidMount() {
        const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=Delhi&appid=707786ff024f86dcfb9e85117463ed07`;
        fetch(apiUrl)
          .then((response) => response.json())
          .then((name) => {this.setState({data:name} ) 
          
          console.log(name)})
      }
    
    
 render() {
    const {data}=this.state;
    //Condition
    const condition1=Component1(data,2,0);
    const condition2=Component1(data,10,0);
    const condition3=Component1(data,18,0);
    const condition4=Component1(data,26,0);
    const condition5=Component1(data,34,0);
    
      //Date


      const date1=Datee(data,2,0);
      const date2=Datee(data,10,0);
      const date3=Datee(data,18,0);
      const date4=Datee(data,26,0);
      const date5=Datee(data,34,0);



      //Temprature


      const temp1=Tempp(data,2);
      const temp2=Tempp(data,10);
      const temp3=Tempp(data,18);
      const temp4=Tempp(data,26);
      const temp5=Tempp(data,34);
     //Imagee
     const srcc1=Imagedata(data,condition1);
     const srcc2=Imagedata(data,condition2);
     const srcc3=Imagedata(data,condition3);
     const srcc4=Imagedata(data,condition4);
     const srcc5=Imagedata(data,condition5);

    


      return (
        
          <div>
            <div className="container1">
                <h1>5-Day Weather Forecast</h1>
            
            </div>



           <form>
           <label for="cars">Choose a City:</label>
           <select>
             <option>DELHI</option> 
             <option></option> 
             <option>LONDON</option> 
             <option>PUNE</option> 
             
               
           </select>
           </form>

            

            <div className="container2">
                <h>
            <Moment format="dddd">{date1}</Moment><br></br>
            <Moment format="MMMM-DD">{date1}</Moment>
            <br></br>
            <Moment format="hh:mm">{date1}</Moment>
            <br></br>
            </h>
            <div className="temp">{temp1}°C
            <br/>
            {condition1}
            <img src={srcc1}/>
            </div>
            
            </div>

            <div className="container3">
                <h>
            <Moment format="dddd">{date2}</Moment><br></br>
            <Moment format="MMMM-DD">{date2}</Moment>
            <br></br>
            <Moment format="hh:mm">{date2}</Moment>
            <br></br>
            </h>
            <div className="temp">{temp2}°C
         
            <br/>
            {condition2}
            <img src={srcc2}/>
            </div>
              
            </div>

            <div className="container4">
                <h>
            <Moment format="dddd">{date3}</Moment><br></br>
            <Moment format="MMMM-DD">{date3}</Moment>
            <br></br>
            <Moment format="hh:mm">{date4}</Moment>
            <br></br>
            </h>
            
            <div className="temp">{temp3}°C
            <br/>
            {condition3}
            <img src={srcc3}/>
            </div>
                
            </div>

            <div className="container5">
                <h>
            <Moment format="dddd">{date4}</Moment><br></br>
            <Moment format="MMMM-DD">{date4}</Moment>
            <br></br>
            <Moment format="hh:mm">{date4}</Moment>
            <br></br>
            </h>
                
            <div className="temp">{temp4}°C
            
            <br/>
            {condition4}
            <img src={srcc4}/>
            </div>
            </div>

            <div className="container6">
                <h>
            <Moment format="dddd">{date5}</Moment><br></br>
            <Moment format="MMMM-DD">{date5}</Moment>
            <br></br>
            <Moment format="hh:mm">{date5}</Moment>
            <br></br>
            </h>
            
            <div className="temp">{temp5}°C
            <br/>
            {condition5}
            <img src={srcc5}/>
            </div>
           </div>
          </div>
      
        
    
)
    }
  }

export default Structure;
