let formIds = ["vshc-wrapper1","vshc-wrapper2","vshc-wrapper3","vshc-wrapper4","vshc-wrapper5","vshc-wrapper6","vshc-wrapper7"];
let currentFormId = ["vshc-wrapper1",0];
document.getElementById('singlehouseformid').addEventListener('submit',e=> {
    e.preventDefault();
});

document.querySelector(".vshc-wrapper8-prev").addEventListener('click',e=> {
    if(currentFormId[0]=="vshc-wrapper1") {
        currentFormId=["vshc-wrapper7",6];
    }else if(currentFormId[0]!="vshc-wrapper1"){
        currentFormId=[formIds[currentFormId[1]-1],currentFormId[1]-1];
    }
    // control display
    for(let i=0;i<formIds.length;i++) {
        if(currentFormId[0]==formIds[i]) {
            document.querySelector(`.${formIds[i]}`).style.display = "flex";
            
        }else if(currentFormId[0]!=formIds[i]){
            document.querySelector(`.${formIds[i]}`).style.display = "none";
        }
    }
});


document.querySelector(".vshc-wrapper8-next").addEventListener('click',e=> {
    if(currentFormId[0]=="vshc-wrapper7") {
        currentFormId=["vshc-wrapper1",0];
    }else if(currentFormId[0]!="vshc-wrapper7"){
        currentFormId=[formIds[currentFormId[1]+1],currentFormId[1]+1];
    }
    // control display
    for(let i=0;i<formIds.length;i++) {
        if(currentFormId[0]==formIds[i]) {
            document.querySelector(`.${formIds[i]}`).style.display = "flex";
        }else if(currentFormId[0]!=formIds[i]){
            document.querySelector(`.${formIds[i]}`).style.display = "none";
        }
    }
});