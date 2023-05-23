
let allDetails=localStorage.detailsStored ? JSON.parse(localStorage.detailsStored):[]
const register=()=>{
   let registeredDetails={
    firstName:first_name.value,
    lastName:last_name.value,
    email:email_add.value,
    pass:password.value

   }

   allDetails.push(registeredDetails)
   localStorage.setItem("detailsStored", JSON.stringify(allDetails))
   console.log(allDetails);

   if(!first_name.value || !last_name.value || !email_add.value || !password.value){
    required_Firstname.className="form-control text-center alert alert-danger col-md-6 col-12 is-invalid"
    required_Firstname.innerHTML="First name is required"
    required_Lastname.className="form-control text-center alert alert-danger col-md-6 col-12 is-invalid"
    required_Lastname.innerHTML="Last name is required"
    required_Email.className="form-control text-center alert alert-danger col-md-6 col-12 is-invalid"
    required_Email.innerHTML="Email is required"
    required_Password.className="form-control text-center alert alert-danger col-md-6 col-12 is-invalid"
    required_Password.innerHTML="Password is required"
   }
   else{
    required_Firstname.className="form-control text-center alert alert-success col-md-6 col-12 is-valid"
    required_Firstname.innerHTML="Successful"
    required_Lastname.className="form-control text-center alert alert-success col-md-6 col-12 is-valid"
    required_Lastname.innerHTML="Successful"
    required_Email.className="form-control text-center alert alert-success col-md-6 col-12 is-valid"
    required_Email.innerHTML="Successful"
    required_Password.className="form-control text-center alert alert-success col-md-6 col-12 is-valid"
    required_Password.innerHTML="Successful"

    window.location.href="full-width.html"

   }
}