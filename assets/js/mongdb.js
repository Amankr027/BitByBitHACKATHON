var x;
 function getData(){
    url = "http://127.0.0.1:5501/diseases.json"; 
    fetch(url).then((response)=>{
    
     return response.json();
    
    }).then((data)=>{
     
    // console.log(data[0].name);
    x=data;
    })
    
    }
     getData()

     function clicked(){
        let selected= document.getElementById("abc").value;
        // console.log(selected);
            
           for(let i=0; i<x.length; i++)
                if(selected==x[i].name)
                {
                    console.log(x[i].desc);
                }
            
        
     }