async function loadJson(url){
    let output=await fetch(url)
    
   try{
     if (output.status===200){
         return output.json()
     }
   }
   catch(error){
       console.log(error)
   }
    
}
loadJson('https://reqres.in/api/products')
