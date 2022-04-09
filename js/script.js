let navbar = document.querySelector('.header .navbar');
    let menuBtn= document.querySelector('#menu-btn');
    menuBtn.onclick=()=>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    }

    // company visit value 

    let valueDispaly = document.querySelectorAll('.visit-count');
    let interval = 5000;
    valueDispaly.forEach((valueDispaly)=>{
        let startValue = 0;
        let endValue = parseInt(valueDispaly.getAttribute('data-val'));
        let duration =Math.floor(interval /endValue);
        let counter = setInterval(function(){
            startValue += 1;
            valueDispaly.textContent = startValue + '+';
            if(startValue == endValue){
                clearInterval(counter);
            }
        }, duration)
       
    })



    // counter  

    let dayBox = document.getElementById('day-box');
    let hrBox = document.getElementById('hours-box');
    let minBox = document.getElementById('minutes-box');
    let secBox = document.getElementById('seconds-box');
    // console.log(dayBox,hrBox,minBox,secBox);


    let endDate= new Date (2022, 4, 20, 16,30);
    let endTime = endDate.getTime();
    // console.log(endTime);

    function countdown(){
        let todayDate = new Date();
        let toadayTime = todayDate.getTime();

        let remainingTime = endTime - toadayTime;

        let oneMin =60 * 1000;

        let oneHr = 60 * oneMin;
        let oneDay = 24 * oneHr;

        let addZeroes = num => num <10 ? `0${num}`: num;
         

        if(endTime< toadayTime) {
            clearInterval(i);
            document.querySelector('.countdown').
            innerHTML = `<p>Countdown had Expired !</p>`
        }
      

        else {
            let daysLeft =Math.floor(remainingTime /oneDay);
            let hrsLeft = Math.floor((remainingTime % oneDay) /oneHr);
            let minsLeft = Math.floor ((remainingTime % oneHr) /oneMin);
            let secsLeft = Math.floor((remainingTime % oneMin) /1000);
            dayBox.textContent = addZeroes(daysLeft);
            hrBox.textContent = addZeroes(hrsLeft);
            minBox.textContent = addZeroes(minsLeft);
            secBox.textContent = addZeroes(secsLeft)
            // console.log(daysLeft);
            // console.log(hrsLeft);
            // console.log(minsLeft);
            // console.log(secsLeft);
        }
    }
    let i = setInterval(countdown, 1000);
    countdown();
