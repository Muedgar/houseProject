window.onload = () => {
    document.getElementById("view-single-house-id").style.display="none";
    document.getElementById("view-single-house-gallery-id").style.display="none";
    document.getElementById("view-single-house-info-id").style.display="none";
    document.getElementById("view-single-house-controls").style.display="none";
    document.getElementById("houses-container").innerHTML = "<div class='specialDataWaitingClassContainer'><h1 class='specialDataWaitingClass'>Data is loading...<h1></div>";
   getData();
}
let housesData = [];

/*
<li class="house-item">
              <article class="house-list-card">
                  <div class="house-list-card-info">
                      <a href="" class="house-list-card-link">
                          <img class="house-item-img" src="https://images.unsplash.com/photo-1565625443865-2c41cdb647d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" srcset="">
                      </a><!--Link to view house details-->
                      
                      <div class="house-list-card-heading">
                          <h4>$1,640/mo</h4>
                          <h5>1 bd1 ba850 sqft- Apartment for rent</h5>
                          <h6>626 E Woodland Park Ave, Chicago, IL 60616</h6>
                      </div>
                  </div>
              </article>
          </li>
*/
const doSomethingWithData = () => {
    document.getElementById("houses-container").innerHTML = "";
    for(let i=0;i<housesData.length;i++) {
        let house = housesData[i];
        const {_id, image1, costpermonth, size, location} = house;
        // h6
        let h6 = document.createElement("h6");
        h6.innerHTML = location;
        // h5
        let h5 = document.createElement("h5");
        h5.innerHTML = size;
        // h4
        let h4 = document.createElement("h4");
        h4.innerHTML = "$" + Number(costpermonth).toFixed() + "/mo";
        // div
        let div = document.createElement("div");
        div.setAttribute("class", "house-list-card-heading");
        div.appendChild(h4);
        div.appendChild(h5);
        div.appendChild(h6);
       

        // img
        let img = document.createElement("img");
        img.setAttribute("src",image1);
        img.setAttribute("class","house-item-img");
        
        // a
        let a = document.createElement("a");
        a.setAttribute("class","house-list-card-link");
        a.appendChild(img);

        // level1 div
        let divlevel1 = document.createElement("div");
        divlevel1.setAttribute("class","house-list-card-info");

        divlevel1.appendChild(a);
        divlevel1.appendChild(div);

        // article
        let article = document.createElement("article");
        article.setAttribute("class","house-list-card");
        
        article.appendChild(divlevel1);

        // li 
        let li = document.createElement("li");
        li.setAttribute("class","house-item");
        li.setAttribute("id",_id);
        
        li.appendChild(article);
        
        li.addEventListener("click",()=>{
            viewHouse(_id);
        });

        document.getElementById("houses-container").appendChild(li);
    }
} 
const getData = async() => {
    // initial rendering... only 5 data points. id, image1, costpermonth, size, location
   try {
    await axios.get('/apis/house/read').then(data=>{
        housesData = data.data;
        doSomethingWithData();
    });
// while(document.getElementById("houses-container").innerHTML == "") {
//         console.log(document.getElementById("houses-container"));
// }    
    
   } catch (error) {
    console.log(error);
   }
}


function viewHouse(id) {
    document.getElementById("view-single-house-id").style.display="block";
    document.getElementById("view-single-house-gallery-id").style.display="block";
    document.getElementById("view-single-house-info-id").style.display="none";
    document.getElementById("view-single-house-controls").style.display="none";
    for(let i=0;i<housesData.length;i++) {
        let house = housesData[i];
        if(house._id == id) {
            console.log("house found");
            console.log("calling house gallery");
            populateHouseGallery(house);
            console.log("calling house information");
            populateHouseInformation(house);
            console.log("calling house manage house");
            populateHouseManager(house);
        }
    }
}

function populateHouseGallery(h) {
    // select 9 images elements.
    // insert into `signimg${i}`
    const {image1,image2,image3,image4,image5,image6,image7,image8,image9} = h;
    let images = [image1,image2,image3,image4,image5,image6,image7,image8,image9];
    let imageView = ["signimg0","signimg1","signimg2","signimg3","signimg4","signimg5","signimg6","signimg7","signimg8"];
    for(let i=0;i<images.length;i++) {
        document.getElementById(imageView[i]).setAttribute("src",images[i]);

    }

}

function populateHouseInformation(h) {
    /*
    
description: "- High-end finishes, exposed brick, and high ceilings\n- In-unit washer/dryer in every unit\n- Original/restored exposed brick throughout all units\n- Central heat & air \n- Nest thermostat \n- Latch entry (smart phone access)\n- White quartz counters with white shaker cabinetry \n- Stainless steel appliances including dishwasher & microwave\n- All new plumbing/electrical/furnaces/fixtures/appliances"
image1: "https://images.unsplash.com/photo-1601830254446-62239192c1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
image2: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
image3: "https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80"
image4: "https://images.unsplash.com/photo-1524061614234-8449637d36ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
image5: "https://images.unsplash.com/photo-1543248939-4296e1fea89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
image6: "https://images.unsplash.com/photo-1536745511564-a5fa6e596e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=496&q=80"
image7: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
image8: "https://images.unsplash.com/photo-1581791836186-7609d9ecfd38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
image9: "https://images.unsplash.com/photo-1633194883650-df448a10d554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1576&q=80"
location: "1523 W Chicago Ave #401, Chicago, IL 60642"
ownercontact: "(224) 328-2516"
rentalfacts: "Date available:\nSat May 7 2022\nType:\nApartment\nCooling:\nOther\nHeating:\nForced air, Gas\nPets:\nCats, Dogs\nParking:\nContact manager\nLaundry:\nIn Unit\nDeposit & fees:\n$1"
size: "2 bd 1 ba 850 sqft"
    */
    const {costpermonth,size,location,contact1,contact2,contact3,ownercontact,description,rentalfacts} = h;
    let infoView = ["vshic-sign-1","vshic-sign-2","vshic-sign-3","vshic-sign-4","vshic-sign-5","vshic-sign-6","vshic-sign-7","vshic-sign-8","vshic-sign-9"];
    let info = [costpermonth,size,location,contact1,contact2,contact3,ownercontact,description,rentalfacts];

    for(let i=0;i<infoView.length;i++) {
        document.getElementById(infoView[i]).innerHTML = info[i];
    }
}

function populateHouseManager(h) {
    const {_id,image1,image2,image3,image4,image5,image6,image7,image8,image9,costpermonth,size,location,contact1,contact2,contact3,ownercontact,description,rentalfacts} = h;
    let infoView = ["v-s-h-c-sign-3","v-s-h-c-sign-4","v-s-h-c-sign-5","v-s-h-c-sign-6","v-s-h-c-sign-7","v-s-h-c-sign-8","v-s-h-c-sign-9","v-s-h-c-sign-10","v-s-h-c-sign-11","v-s-h-c-sign-12","v-s-h-c-sign-13","v-s-h-c-sign-14","v-s-h-c-sign-15","v-s-h-c-sign-16","v-s-h-c-sign-17","v-s-h-c-sign-18","v-s-h-c-sign-19","v-s-h-c-sign-20"];
    let info = [image1,image2,image3,image4,image5,image6,image7,image8,image9,costpermonth,size,location,contact1,contact2,contact3,ownercontact,description,rentalfacts];
    for(let i=0;i<infoView.length;i++) {
        document.getElementById(infoView[i]).value = info[i];
    }
    // add and attribute as id
    let buttonsView = ["v-s-h-c-sign-1","v-s-h-c-sign-2"];
    for(let i=0;i<buttonsView.length;i++) {
        document.getElementById(buttonsView[i]).setAttribute("house-id",_id);
    }
}