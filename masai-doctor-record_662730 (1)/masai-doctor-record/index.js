// let myForm = document.querySelector("form");
// let Doctor = document.getElementById("name");
// let DoctorID = document.getElementById("doctor _id");
// let specialization = document.getElementById("specialization");
// let experience = document.getElementById("experience");
// let emailAddress = document.getElementById("email");
// let mobileNumber = document.getElementById("mobile");
// let tbody = document.querySelector("tbody");
// let AllData = [];

// myForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   let Data = {};
//   Data.Doctor = Doctor.value;
//   Data.DoctorID = DoctorID.value;
//   Data.specialization = specialization.value;
//   Data.experience = experience.value;
//   Data.emailAddress = emailAddress.value;
//   Data.mobileNumber = mobileNumber.value;
//   Data.role = role.value;

//   AllData.push(Data);

//   tbody.innerHTML = null;

//   AllData.map((element, index) => {
//     let row = document.createElement("tr");
//     let td1 = document.createElement("td");
//     let td2 = document.createElement("td");
//     let td3 = document.createElement("td");
//     let td4 = document.createElement("td");
//     let td5 = document.createElement("td");
//     let td6 = document.createElement("td");
//     let td7 = document.createElement("td");
//     let td8 = document.createElement("td");
//     let deleteBtn = document.createElement("button");

//     td1.innerText = element.Doctor;
//     td2.innerText = element.DoctorID;
//     td3.innerText = element.specialization;
//     td4.innerText = element.experience;
//     td5.innerText = element.emailAddress;
//     td6.innerText = element.mobileNumber;
//     td7.innerText = element.role;
//     td8.innerText = "Delete"; 

//     deleteBtn.innerText = "Delete";
//     deleteBtn.addEventListener("click", () => {
//       AllData.splice(index, 1); 
//       tbody.removeChild(row);
//     });

//     row.append(td1, td2, td3, td4, td5, td6, td7, td8, deleteBtn);
//     tbody.append(row);
//   });

//  Doctor.value = '';
// DoctorID.value = '';
// specialization.value = '';
// experience.value = '';
// emailAddress.value = '';
// mobileNumber.value = '';
// role.value = '';
// });
  


  let myForm = document.querySelector("form");
  let Doctor = document.getElementById("name");
  let DoctorID = document.getElementById("doctor_id");
  let specialization = document.getElementById("specialization");
  let experience = document.getElementById("experience");
  let emailAddress = document.getElementById("email");
  let mobileNumber = document.getElementById("mobile");
  let tbody = document.querySelector("tbody");
  let AllData = [];

  myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let Data = {};
    Data.Doctor = Doctor.value;
    Data.DoctorID = DoctorID.value;
    Data.specialization = specialization.value;
    Data.experience = experience.value;
    Data.emailAddress = emailAddress.value;
    Data.mobileNumber = mobileNumber.value;
    Data.role = "Role"; // You didn't have a value for role in your form

    AllData.push(Data);

    tbody.innerHTML = null;

    AllData.map((element, index) => {
      let row = document.createElement("tr");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      let td6 = document.createElement("td");
      let td7 = document.createElement("td");
      let td8 = document.createElement("td");
      let deleteBtn = document.createElement("button");

      td1.innerText = element.Doctor;
      td2.innerText = element.DoctorID;
      td3.innerText = element.specialization;
      td4.innerText = element.experience;
      td5.innerText = element.emailAddress;
      td6.innerText = element.mobileNumber;
      td7.innerText = element.role;
      td8.innerText = "Delete";

      deleteBtn.innerText = "Delete";
      deleteBtn.addEventListener("click", () => {
        AllData.splice(index, 1);
        tbody.removeChild(row);
      });

      row.append(td1, td2, td3, td4, td5, td6, td7, td8, deleteBtn);
      tbody.append(row);
    });

    Doctor.value = '';
    DoctorID.value = '';
    specialization.value = '';
    experience.value = '';
    emailAddress.value = '';
    mobileNumber.value = '';
  });
