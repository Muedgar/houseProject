window.onload = () => {
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
    for(let i=0;i<housesData.length;i++) {
        let house = housesData[i];
        if(house._id == id) {
            console.log("house found");
            console.log(house);
        }
    }
}