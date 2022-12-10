 var x;
 var p;
 var des;
 var cause;
 var prevent;
 var medicine;
 var meddes;
 function getData(){
    url = "http://127.0.0.1:5502/diseases.json"; 
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
                //if(selected==x[i].name)
                {   for(let j=0;j<x[i].symptoms.length;j++)
                    {   if(selected==x[i].symptoms[j]){
                        console.log(x[i].name);
                        p=x[i].name;
                    }
                }
                }
          for(let i=0;i<x.length;i++){
            if(p==x[i].name){
                des=x[i].desc;
                cause=x[i].causes;
                prevent=x[i].prevention;
                medicine=x[i].medicines;
                meddes=x[i].meddesc;



            }
          }
           
          console.log(des);
          console.log(cause);
          console.log(prevent);
          console.log(medicine);
          console.log(meddes);
            
        
     }
 
 