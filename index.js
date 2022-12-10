 var x;
 var p;
 var des;
 var cause;
 var prevent;
 var medicine;
 var meddes;
let button= document.getElementById("btnn")
let symp_orgdis= document.getElementById("10")
 let symp_desease= document.getElementById("11")
 let symp_cause= document.getElementById("12")
 let symp_medicine= document.getElementById("13")
 let symp_meddesc= document.getElementById("14")
 let symp_prevention= document.getElementById("15")
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

          button.addEventListener("click",function(e){
            symp_desease.innerText= des;
            symp_cause.innerText= cause;
            symp_medicine.innerText=medicine ;
            symp_meddesc.innerText=meddes ;
            symp_prevention.innerText= prevent;
            symp_orgdis.innerText=p;

            symp_orgdis.style.width="79vw";
            symp_orgdis.style.height="9vw";
            
            symp_desease.style.width="79vw";
            symp_desease.style.height="9vw";
            
            symp_cause.style.width="79vw";
            symp_cause.style.height="9vw";
            
            symp_medicine.style.width="79vw";
            symp_medicine.style.height="9vw";
            
            symp_meddesc.style.width="79vw";
            symp_meddesc.style.height="9vw";
            
            symp_prevention.style.width="79vw";
            symp_prevention.style.height="9vw";
          })
            
            
        
     }
 
 