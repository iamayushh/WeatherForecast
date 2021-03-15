import react from 'react';
function Imagedata(data,para)
{
    var soucee;
    if(para=='Clear')
    {
        soucee="https://png.vector.me/files/images/1/6/166202/symbols_weather_clear_sunny.jpg";
    }
    else if(para=='Clouds')
    {
        soucee="https://www.clipartkey.com/mpngs/m/19-197515_showing-post-media-for-cool-and-cloudy-weather.png";
    }
    else
    {
        soucee="https://previews.123rf.com/images/djvstock/djvstock1801/djvstock180100175/92595809-rainy-weather-symbol-cartoon.jpg";
    }
    return soucee;
}
export default Imagedata;