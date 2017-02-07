/*function Navigation(){
if(window.DeviceMotionEvent){
  window.addEventListener("devicemotion", motion, false);
}else{
  console.log("DeviceMotionEvent is not supported");
}
}
*/


function motion()
{
	alert('hi there!');
	var txt1= document.getElementById('Navoutput');
	txt1.innerHTML= "100";
//event.accelerationIncludingGravity.x + ", "
  //  + event.accelerationIncludingGravity.y + ", "
    //+ event.accelerationIncludingGravity.z;
//  console.log("Accelerometer: "
//    + event.accelerationIncludingGravity.x + ", "
//    + event.accelerationIncludingGravity.y + ", "
//    + event.accelerationIncludingGravity.z
//  );
}
