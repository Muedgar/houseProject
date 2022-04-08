        
 window.addEventListener('load', () => {
    if(window.location.pathname == "/") {
        document.querySelector("title").text = "Rent House";
        document.querySelector("link").href = "./assets/villacare.ico";
    }
    
});


/// uploading houses
document.getElementById("form1").addEventListener('submit',async (e)=> {
    e.preventDefault();
    const housesFormData = document.getElementById("houses");
    const house = new FileReader();
    house.readAsArrayBuffer(housesFormData.files[0]);
   
    house.onload = async ()=> {
        try {
            let data = await new Uint8Array(house.result);
        let arr = new Array();
        const loadArray = () => {
            for(let i=0;i!=data.length;++i) arr[i] = String.fromCharCode(data[i]);
        }
        await loadArray();
        let bstr = await arr.join("");
        let workbook = await XLSX.read(bstr, {type:"binary"});
        let first_sheet_name = await workbook.SheetNames[0];
        let worksheet = await workbook.Sheets[first_sheet_name];
        let houses = await XLSX.utils.sheet_to_json(worksheet);
        
try {
       const ans =  await fetch('/apis/house/create', {
        method: 'POST',
        body: JSON.stringify({houses}),
        headers: {'Content-Type': 'application/json'}
    }).catch(console.error);
    console.log(ans);
    } catch (error) {
        
    }
        

        } catch (error) {
            
        }
    }
    house.onerror = ()=> {
        console.log(house.error);
    }
    
});
