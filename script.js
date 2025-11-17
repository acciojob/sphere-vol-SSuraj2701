function volume_sphere() {
	event.preventDefault();
    //Write your code here
let radius=document.getElementById("radius").value;
radius=Number(radius);
if(isNaN(radius)||radius<0){
    document.getElementById("volume").value="NaN";
    return;
}
let vol=(4/3)*Math.PI*Math.pow(radius,3);

vol=vol.toFixed(4);
document.getElementById("volume").value=vol;

  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
