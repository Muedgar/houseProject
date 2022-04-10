/*
let infoView = ["v-s-h-c-sign-3","v-s-h-c-sign-4","v-s-h-c-sign-5","v-s-h-c-sign-6","v-s-h-c-sign-7","v-s-h-c-sign-8","v-s-h-c-sign-9","v-s-h-c-sign-10","v-s-h-c-sign-11","v-s-h-c-sign-12","v-s-h-c-sign-13","v-s-h-c-sign-14","v-s-h-c-sign-15","v-s-h-c-sign-16","v-s-h-c-sign-17","v-s-h-c-sign-18","v-s-h-c-sign-19","v-s-h-c-sign-20"];
    let info = [image1,image2,image3,image4,image5,image6,image7,image8,image9,costpermonth,size,location,contact1,contact2,contact3,ownercontact,description,rentalfacts];
    
{
id:v-s-h-c-sign-2 // for delete
}


*/

document.getElementById("v-s-h-c-sign-2").addEventListener('click',async()=> {
    let id = document.getElementById("v-s-h-c-sign-2").getAttribute("house-id");
    // send obj to update
try {
    const ans =  await fetch('/apis/house/delete', {
     method: 'DELETE',
     body: JSON.stringify({id}),
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