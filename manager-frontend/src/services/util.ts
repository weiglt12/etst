
export default class Util {
    public static calculateTimeDelta(interval:number): string {
        var msecPerMinute = 1000 * 60;  
        var msecPerHour = msecPerMinute * 60;  
        var msecPerDay = msecPerHour * 24; 
    
        var days = Math.floor(interval / msecPerDay );  
        interval = interval - (days * msecPerDay );  
    
        // Calculate the hours, minutes, and seconds.  
        var hours = Math.floor(interval / msecPerHour );  
        interval = interval - (hours * msecPerHour );  
    
        var minutes = Math.floor(interval / msecPerMinute );  
        interval = interval - (minutes * msecPerMinute );   
        var result = '';
        if(days != 0) {
          result = result + days + " Days";
        }
        else if(hours != 0) {
          result = result + hours + " Hours";
        }
        else if(minutes != 0) {
          result = result + minutes + " Minutes";
        } else {
          var seconds = Math.floor(interval / 1000 );  
          result = seconds + " Seconds"
        }
        // Display the result.  
        return result;  
      }
}