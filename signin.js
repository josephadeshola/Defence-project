let allDetails=localStorage.detailsStored ? JSON.parse(localStorage.detailsStored):[]
const signin =()=>{
let found=false
allDetails.map((userDetails)=>{
   if(userDetails.email==email_add.value && userDetails.pass==password.value){
     
      found=true
     }
})
if(found==true){
   alert("good")
}
else{
   alert("incorrect user details")
}
}
