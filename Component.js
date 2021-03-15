import react from 'react';
import './Structure';
import Kelvin from './Constant';

function Datee(data,para1)
{
    const todaydate=data && data.list[para1].dt_txt
    return(todaydate);
}
function Component1(data,para1,para2)
{
    const condition1=data && data.list[para1].weather[para2].main
    
    return(condition1);

}
function Imagedata(data,para)
{
    var soucee;
    if(para=='Clear')
    {
        soucee="/Users/unthinkable-mac-0049/Desktop/Unthinkable/ReactBasics/WeatherPrector/weatherforecat/src/sunny.jpeg";
    }
    else if(para=='Clouds')
    {
        soucee="/Users/unthinkable-mac-0049/Desktop/Unthinkable/ReactBasics/WeatherPrector/weatherforecat/src/cloud.jpeg";
    }
    else
    {
        soucee="/Users/unthinkable-mac-0049/Desktop/Unthinkable/ReactBasics/WeatherPrector/weatherforecat/src/rain.jpeg";
    }
    return soucee;
}


function Tempp(data,para1)
{
    var temp=data && data.list[para1].main.temp;
    temp=temp-Kelvin;
    var m=temp.toFixed(2);
    return m;
}



export {Component1,Datee,Tempp,Imagedata};




