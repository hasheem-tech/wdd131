const temp = document.querySelector('#temp');
const t = parseInt(temp.textContent);
const temp_unit = document.querySelector('#temp-unit');
const wind_speed = document.querySelector('#wind-speed');
const w = parseInt(wind_speed.textContent);
const speed_unit = document.querySelector('#speed-unit');
const wind_chill_container = document.querySelector('#wind-chill');


let wind_chill = calculatewindchill(t, temp_unit, w);

wind_chill_container.innerHTML += `${wind_chill}`;


function calculatewindchill(t, temp_unit, w)
{
    if(temp_unit.textContent == 'C' && speed_unit.textContent =='km/h' && t <= 10 && w > 4.8){
        let wind_chill = 13.12 + 0.6215*t - 11.37*Math.pow(w,0.16) + 0.3965*t*Math.pow(w,0.16);
        return `${wind_chill.toFixed(1)} °C`;
    }
    else if(temp_unit.textContent == 'F' && speed_unit.textContent == 'mph' && t <= 50 && w > 3)
    {
        let wind_chill = 35.74 + 0.6215*t - 35.75*Math.pow(w,0.16) + 0.4275*t*Math.pow(w,0.16);
        return `${wind_chill.toFixed(1)} °F`;
    }else{
        return 'N/A';
    }
}