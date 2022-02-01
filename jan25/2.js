async function await(){
    new Promise((resolve)=>{

        setTimeout(resolve, 1000);
   })
  return 10 
}
function f(){
    await().then((data)=>{

        console.log(data)
    })
}
f()
