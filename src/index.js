const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  renderBtn();
});

function renderBtn() {
  let newUserBtn = document.querySelector(".btn.btn-primary")
  newUserBtn.addEventListener("click", () => {
    let container = document.querySelector(".container")
    let userPic = document.querySelector(".col img");
    let fullName = document.querySelector("#fullname")
    let userEmail = document.querySelector("#email")
    let userStreet = document.querySelector("#street")
    let userCity = document.querySelector("#city")
    let userState = document.querySelector("#state")
    let userPostCode = document.querySelector("#postcode")
    let userPhone = document.querySelector("#phone")
    let userCell = document.querySelector("#cell")
    let userBirth = document.querySelector("#date_of_birth")
  
    fetch("https://randomuser.me/api/")
    .then(req => req.json())
    .then(data => {
      let user = data.results[0]
      console.log(user)
      userPic.src = user.picture.medium
      fullName.innerHTML = `
      ${user.name.title}. ${user.name.first} ${user.name.last}
      `
      userEmail.innerHTML = user.email
      userStreet.innerHTML = `
      ${user.location.street.number} 
      ${user.location.street.name}
      `
      userCity.innerHTML = user.location.city
      userState.innerHTML = user.location.state
      userPostCode.innerHTML = user.location.postcode
      userPhone.innerHTML = user.phone
      userCell.innerHTML = user.cell
      userBirth.innerHTML = user.dob.date
    })
  })
}