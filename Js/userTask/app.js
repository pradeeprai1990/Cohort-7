let user = [
  {
    name: "sachin1",
    age: 30,
    city: "pune",
    phone: 1234567890,
  },
   {
    name: "sachin2",
    age: 30,
    city: "pune",
    phone: 1234567890,
  },
  {
    name: "ravi",
    age: 35,
    city: "pune",
    phone: 456456456,
  },
  {
    name: "price",
    age: 56,
    city: "jodhpur",
    phone: 7656757,
  },
  {
    name: "priya",
    age: 34,
    city: "jodhpur",
    phone: 7656757,
  },
  {
    name: "demo",
    age: 25,
    city: "mumbai",
    phone: 9876543210,
  },
  {
    name: "raj",
    age: 68,
    city: "pune",
    phone: 75567567,
  },
];

let serachName = "";
let serachCity = "";

let tbody = document.querySelector("tbody");
let displayData = () => {
  console.log(serachName);
  console.log(serachCity);
  let userList = [...user];
  let row = "";

  userList = userList.filter((obj) =>
    obj.name.toLowerCase().includes(serachName.toLowerCase()),
  );

  console.log(userList);
  


  if (userList.length >= 1) {
    userList.forEach((obj, index) => {
      row += `<tr>
                <td>${index + 1}</td>
                <td>${obj.name}</td>
                <td>${obj.age}</td>
               <td>${obj.city}</td>
               <td>${obj.phone}</td>
            </tr>`;
    });
  } else {
    row += `<tr><td>No Data Found</td> </tr>`;
  }

  tbody.innerHTML = row;
};

displayData();

let allInput = document.querySelectorAll("input");

allInput[0].addEventListener("keyup", () => {
  serachName = allInput[0].value; //Sachin
  displayData();
});

allInput[1].addEventListener("keyup", () => {
  serachCity = allInput[1].value;
  displayData();
});




