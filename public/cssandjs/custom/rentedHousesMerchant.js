let housesData2 = [];

function viewHouse(id) { //
    document.getElementById("view-single-house-id").style.display="block";
    document.getElementById("view-single-house-gallery-id").style.display="block";
    document.getElementById("view-single-house-info-id").style.display="none";
    document.getElementById("view-single-house-controls").style.display="none";
    for(let i=0;i<housesData2.length;i++) {
        let house = housesData2[i];
        if(house._id == id) {
            console.log("house found");
            console.log("calling house gallery");
            populateHouseGallery(house);
            console.log("calling house information");
            populateHouseInformation(house);
            console.log("calling house manage house");
            populateHouseManager(house);

    HOUSE_VAR = house._id;
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
    _id: "625054218021dfb7fe643e7b"
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
 
"merchant": "ownercontact2",
        "tenant": "tenantcontact3",
        "house": "62516bf2c2f234302d24f76b",
        "date": "2021-06-21T22:00:00.000Z",
        "amount": "3000",
        "status": "false"    


        <label class="draw drawLabel" for="contact1input">Landlord Contact:</label>
            <input id="landlord"  class="inputStyle2 inputStyle1" type="text" name="contact1input" id="contact1input">
            <label class="draw drawLabel" for="contact1input">Tenant Contact:</label>
            <input id="tenant"  class="inputStyle2 inputStyle1" type="text" name="contact1input" id="contact1input">
            <label class="draw drawLabel" for="contact1input">Payment date:</label>
            <input id="paymentdate"  class="inputStyle2 inputStyle1" type="date" name="contact1input" id="contact1input">
            <label class="draw drawLabel" for="contact2input">Monthly Cost:</label>
            <input id="monthlycost"  class="inputStyle2 inputStyle1" type="text" name="contact2input" id="contact2input">
            
*/
    const {costpermonth,ownercontact} = h;
    console.log(h);
    document.getElementById("landlord").value = ownercontact;
    document.getElementById("monthlycost").value = costpermonth + "$";
    document.getElementById("paymentdate").value = new Date().toDateString();
    document.getElementById("landlord").disabled = true;
}

function populateHouseManager(h) {
    
    
}

document.getElementById("rentedHousesView").addEventListener('click', () => {
    let container = document.createElement('div');
    container.setAttribute('id','getCurrentUser');
    container.style.position = "absolute";
    container.style.top = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.zIndex = "10000";
    container.style.transform = "translateX(-32px)";
    container.style.backgroundColor = "#000000e0";
    container.style.textAlign = "center";
    container.style.display = "flex";
    container.innerHTML = `
    <div class="mb-3" style="margin: 100px auto">
                <form id="currentUserForm" onsubmit="getCurrentUserFun('currentUserFormInput','getCurrentUser')" action="" method="">
                    <div class="custom-file mb-3">
                        <input id="currentUserFormInput" style="width: 300px" type="text" class="custom-file-input form-control" placeholder="Write here tenant contact...">
                    </div>
                </form>
            </div>
    `;
    console.log(container);
    document.getElementById('houses-container').innerHTML = "";
    document.getElementById('houses-container').appendChild(container);
});

async function getCurrentUserFun(currentuser,getCurrentUser) {
    let currusr = document.getElementById(currentuser).value;
    //13 enter keycode
    if(currusr=="") {
        return;
    }else {
        // get data and render
        try {
            // get houses that can be rented.
         await axios.get('/apis/payment/merchantRead/'+currusr).then(data=>{
             const {listRentedHousesSpecificUserMerchant,paymentsMadeInvolvingThisMerchant} = data.data;
             
             console.log(housesData2);
             document.getElementById(getCurrentUser).style.display = "none";
             console.log("here is a list that needs filtering",listRentedHousesSpecificUserMerchant);
             let aFilterOfRentedHouses = [];
             aFilterOfRentedHouses[0] = listRentedHousesSpecificUserMerchant[0];
             for(let i=0;i<listRentedHousesSpecificUserMerchant.length;i++) {
                let houseDuplicates = 0;
                for(let j=0;j<aFilterOfRentedHouses.length;j++) {
                    if(listRentedHousesSpecificUserMerchant[i]._id == aFilterOfRentedHouses[j]._id) {
                        houseDuplicates++;
                    }
                }
                if(houseDuplicates == 0) {
                    aFilterOfRentedHouses.push(listRentedHousesSpecificUserMerchant[i]);
                }
             }
             doSomethingWithData2Tenant(aFilterOfRentedHouses,paymentsMadeInvolvingThisMerchant);
             
         });
     // while(document.getElementById("houses-container").innerHTML == "") {
     //         console.log(document.getElementById("houses-container"));
     // }    
         
        } catch (error) {
         console.log(error);
        }
    }
}

const doSomethingWithData2Tenant = (specificUserRents, specificUserPayments) => {
    let housesData2 = specificUserRents;
    let paymentsData = specificUserPayments;
        document.getElementById("houses-container").innerHTML = "";
        // empty the container
        for(let i=0;i<housesData2.length;i++) {
            let house = housesData2[i];
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
                viewHouseTenant(house,paymentsData);
            });
    
            document.getElementById("houses-container").appendChild(li);
        }
    
}

function viewHouseTenant(houseD, paymentD) { //
    document.getElementById("view-single-house-id").style.display="block";
    document.getElementById("view-single-house-gallery-id").style.display="block";
    document.getElementById("view-single-house-info-id").style.display="none";
    document.getElementById("view-single-house-controls").style.display="none";
    
            populateHouseGallery(houseD);
            populateHouseInformation(houseD);
            populateHouseManager(houseD);
    const {_id} = houseD;
            populatePayments(_id,paymentD);
      /*
      let MERCHANT_VAR = "";
let HOUSE_VAR = "";
let AMOUNT_VAR = "";
      */
}



function populatePayments(id, payments) {
    
    
    // check if there is a child
    if(document.getElementById("view-single-house-info-id").children.length == 2) {
        document.getElementById("view-single-house-info-id").removeChild(document.getElementById("btn-view-payments-info-id"));
    }
    let viewpayments = document.createElement("button");
    viewpayments.setAttribute("class","btn-info");
    viewpayments.setAttribute("id","btn-view-payments-info-id");
    viewpayments.textContent = "View Payments History";
    viewpayments.style.width = "250px";
    viewpayments.style.height = "50px";
    viewpayments.style.position = "absolute";
    viewpayments.style.top = "412px";
    viewpayments.style.right = "37px";
    viewpayments.style.zIndex = "100";
    viewpayments.addEventListener('click',() => {
        let showPay = [];
        for(let i=0;i<payments.length;i++) {
        if(id == payments[i].house) {
            showPay.push(payments[i]);
        }
        }
        console.log(showPay);
        console.log("showing payment...",showPay);
        /// create a div and show it
        /*
        
        */
        if(document.getElementById('view-single-house-id').children.length == 5) {
            document.getElementById('view-single-house-id').removeChild(document.getElementById("showPayContainer"));
        }

        let showPayContainer = document.createElement('div');
        showPayContainer.setAttribute('id','showPayContainer');
        showPayContainer.style.width = "100%";
        showPayContainer.style.height = "100%";
        showPayContainer.style.position = "absolute";
        showPayContainer.style.top = "0px";
        showPayContainer.style.backgroundColor = "white";
        showPayContainer.style.zIndex = "101";

        let showPayContainerClose = document.createElement('div');
        showPayContainerClose.setAttribute("class","buttonsSingleViewNavContainer");
        showPayContainerClose.style.width = "80px";
        showPayContainerClose.style.height = "80px";
        showPayContainerClose.style.position = "fixed";
        showPayContainerClose.style.top = "10px";
        showPayContainerClose.style.right = "50px";
        showPayContainerClose.style.backgroundColor = "black";
        showPayContainerClose.innerHTML = `
        <a href="#" class="buttonSingleViewNav">
      <canvas class="button__canvas"></canvas>
      <span class="button__text" value="close"><i class="fa-solid fa-x"></i></span>
    </a>
        `;
        showPayContainerClose.addEventListener('click',() => {
            showPayContainer.style.display = "none";
        });
        showPayContainer.appendChild(showPayContainerClose);
        showPayContainer.style.overflowY = "scroll";
        showPayContainer.style.display = "grid";
        showPayContainer.style.gridTemplateColumns = "1fr 1fr 1fr";

        for(let i=0;i<showPay.length;i++) {
            /*
            amount: "3000"
date: "2021-06-21T22:00:00.000Z"
merchant: "ownercontact"
tenant: "tenantcontact2"
            */

            let tenantText = document.createElement('p');
            tenantText.innerHTML ="Contact of tenant (payed by): "+showPay[i].tenant;
            let merchantText = document.createElement('p');
            merchantText.innerHTML = "Contact of tenant (received by): "+showPay[i].merchant;
            let dateText = document.createElement('p');
            dateText.innerHTML = "Date of transaction: "+showPay[i].date;
            let amountText = document.createElement('p');
            amountText.innerHTML = "Amount paid: "+showPay[i].amount+" $";

            let paymentDiv = document.createElement('div');
            paymentDiv.appendChild(tenantText);
            paymentDiv.appendChild(merchantText);
            paymentDiv.appendChild(dateText);
            paymentDiv.appendChild(amountText);

            // style paymentdiv

            paymentDiv.style.width="270px";
            paymentDiv.style.height="400px";
            paymentDiv.style.fontSize="0.9em";
            paymentDiv.style.fontFamily="system-ui";
            paymentDiv.style.fontWeight="bolder";
            paymentDiv.style.border="5px solid black";
            paymentDiv.style.boxShadow="4px 4px 4px 4px gray";
            paymentDiv.style.overflow="hidden";
            paymentDiv.style.textAlign="center";
            paymentDiv.style.display="flex";
            paymentDiv.style.flexDirection="column";
            paymentDiv.style.padding="20px";
            paymentDiv.style.margin="20px";


            showPayContainer.appendChild(paymentDiv);
        }
        document.getElementById('view-single-house-id').appendChild(showPayContainer);
    });

    document.getElementById("view-single-house-info-id").appendChild(viewpayments);


    

}