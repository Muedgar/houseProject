/*
let infoView = ["v-s-h-c-sign-3","v-s-h-c-sign-4","v-s-h-c-sign-5","v-s-h-c-sign-6","v-s-h-c-sign-7","v-s-h-c-sign-8","v-s-h-c-sign-9","v-s-h-c-sign-10","v-s-h-c-sign-11","v-s-h-c-sign-12","v-s-h-c-sign-13","v-s-h-c-sign-14","v-s-h-c-sign-15","v-s-h-c-sign-16","v-s-h-c-sign-17","v-s-h-c-sign-18","v-s-h-c-sign-19","v-s-h-c-sign-20"];
    let info = [image1,image2,image3,image4,image5,image6,image7,image8,image9,costpermonth,size,location,contact1,contact2,contact3,ownercontact,description,rentalfacts];
    
{
id:v-s-h-c-sign-1 // for update
contact1:v-s-h-c-sign-15
contact2:v-s-h-c-sign-16
contact3:v-s-h-c-sign-17
costpermonth:v-s-h-c-sign-12
description:v-s-h-c-sign-19
image1:v-s-h-c-sign-3
image2:v-s-h-c-sign-4
image3:v-s-h-c-sign-5
image4:v-s-h-c-sign-6
image5:v-s-h-c-sign-7
image6:v-s-h-c-sign-8
image7:v-s-h-c-sign-9
image8:v-s-h-c-sign-10
image9:v-s-h-c-sign-11
location:v-s-h-c-sign-14
ownercontact:v-s-h-c-sign-18
rentalfacts:v-s-h-c-sign-20
size:v-s-h-c-sign-13
}


*/

document.getElementById("v-s-h-c-sign-1").addEventListener('click',async()=> {
    console.log("running update...");
    let id = document.getElementById("v-s-h-c-sign-1").getAttribute("house-id");
let contact1 = document.getElementById('v-s-h-c-sign-15').value;
let contact2 = document.getElementById('v-s-h-c-sign-16').value;
let contact3 = document.getElementById('v-s-h-c-sign-17').value;
let costpermonth = document.getElementById('v-s-h-c-sign-12').value;
let description = document.getElementById('v-s-h-c-sign-19').value;
let image1 = document.getElementById('v-s-h-c-sign-3').value;
let image2 = document.getElementById('v-s-h-c-sign-4').value
let image3 = document.getElementById('v-s-h-c-sign-5').value;
let image4 = document.getElementById('v-s-h-c-sign-6').value;
let image5 = document.getElementById('v-s-h-c-sign-7').value;
let image6 = document.getElementById('v-s-h-c-sign-8').value;
let image7=document.getElementById('v-s-h-c-sign-9').value;
let image8=document.getElementById('v-s-h-c-sign-10').value;
let image9=document.getElementById('v-s-h-c-sign-11').value;
let location=document.getElementById('v-s-h-c-sign-14').value;
let ownercontact=document.getElementById('v-s-h-c-sign-18').value;
let rentalfacts=document.getElementById('v-s-h-c-sign-20').value;
let size=document.getElementById('v-s-h-c-sign-13').value;


// send obj to update
try {
    const ans =  await fetch('/apis/house/update', {
     method: 'PUT',
     body: JSON.stringify({id,contact1,contact2,contact3,costpermonth,description,image1,image2,image3,image4,image5,image6,image7,image8,image9,location,ownercontact,rentalfacts,size}),
     headers: {'Content-Type': 'application/json'}
 }).catch(console.error);
 setTimeout(() => {
     if(ans) {
        window.location = '/merchantView';
     }
 }, 2000);
 } catch (error) {
     
 }
});