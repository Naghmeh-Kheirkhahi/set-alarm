const clockTime = document.getElementById('clockTime');
const selectHour = document.getElementById('hour');
const selectMinute = document.getElementById('minute');
const selectAmPm = document.getElementById('ampm');
let timeAlarm;
const audioFile = document.getElementById('myAudio');
const setOrClearButton = document.getElementById('SetOrClearButton');

function timeInitializeFunction(){    
    for (let h = 1; h < 13; h++) {
        let hour = document.createElement('option');
        hour.value = h;
        hour.innerText = ('0' + h).slice(-2);
        selectHour.appendChild(hour);
    }

    for (let m = 0; m < 60; m++) {
        let minute = document.createElement('option');
        minute.value = m;
        minute.innerText = ('0' + m).slice(-2);
        selectMinute.appendChild(minute);
    }
}

timeInitializeFunction();


function timeFunction(){
    const currentTime = new Date().toLocaleTimeString();
    clockTime.innerHTML = currentTime;

    if (timeAlarm) {
        if (timeAlarm === currentTime) {
            audioFile.play();
        }
    }
}

setInterval(timeFunction, 1000);


function checkUserInput() {
    if (selectHour.value !== 'Hour' && selectMinute.value !== 'Minute' && selectAmPm.value !== 'AM/PM') {
        setOrClearButton.disabled = false;
    }

    else {
        setOrClearButton.disabled = true;
    }
}

function SetOrClearAlarm() {
    if (!timeAlarm) {
        setOrClearButton.innerText = 'Clear Alarm';
        const hourAlarm = selectHour.value;
        const minuteAlarm = selectMinute.value;
        const ampmAlarm = selectAmPm.value;
        
        timeAlarm = hourAlarm + ':' + minuteAlarm + ':' + '00 ' + ampmAlarm; 
        
        selectHour.disabled = true;
        selectMinute.disabled = true;
        selectAmPm.disabled = true;
        }

        else {
        setOrClearButton.innerText = 'Set Alarm';
        timeAlarm = null;
        selectHour.disabled = false;
        selectMinute.disabled = false;
        selectAmPm.disabled = false;
    }
}