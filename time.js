function timeConversion(s) {
    // Write your code here
     let timeArr = s.split(':');
     let hour =timeArr[0]
     let minutes = timeArr[1]
     let secMeridian = timeArr[2]
     let seconds = secMeridian.split('').splice(0,2).join('')
     let meridian = secMeridian.split('').splice(2).join('')
    
    if(hour == 12 && meridian=='PM'){
        hour == hour
        
    }
    else if(hour != 12){
        hour = parseInt(hour)+12
        
    }
    else if(hour == 12 && meridian == 'AM'){
        hour= '00'
    }
    
    let convertedTime = (`${hour}:${minutes}:${seconds}`)
     return convertedTime
   
   
}