// let loginStatus = true;
// let loginPromise = new Promise((resolove, reject) => {
//   if (loginStatus) {
//     resolove({ status: true, message: "Login Done" });
//   } else {
//     reject({ status: false, message: "Invalid Username or Password" });
//   }
// });

// // let display = async () => {

// //   try {
// //     let data = await loginPromise; // success ka ans
// //     console.log(data.status);
// //     console.log(data.message);
// //   } catch (err) {
// //     console.log(err);
// //   }

// //   // console.log(loginPromise);
// //   //API
// //   //FIle handling
// //   //DB
// // };

// async function display() {
//   //Core js
//   try {
//     let data = await loginPromise; //success //2 s // 3 //4s
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// display();

// let display2 = () => {
//   //React Js
//   loginPromise
//     .then((successRes) => {
//       console.log(successRes);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// display2();

// // let l=[10,30,99,44]
// // // async // await
// // console.log(loginPromise);
// // //Then Catch
// // //

// // let user = [
// //   {
// //     name: "Rohit",
// //     age: 23,
// //     city: "Delhi",
// //   },
// //   {
// //     name: "Rahul",
// //     age: 24,
// //     city: "Mumbai",
// //   },
// // ];

// // let data=JSON.stringify(user);

let productGridElement = document.querySelector("#productGrid");
let CategoryParentElement = document.querySelector("#CategoryParent");
let loadinDiv = document.querySelector("#loadinDiv");
let getCategory = async () => {
  let apiRes = await fetch("https://dummyjson.com/products/categories");
  let data = await apiRes.json();
  let categoryItem = "";
  data.forEach((obj) => {
    categoryItem += `<li class="p-1" data-slug="${obj.slug}">${obj.name} </li>`;
  });
  CategoryParentElement.innerHTML = categoryItem;
};

let getProducts = async (slug) => {
  //Start

  loadinDiv.style.display = "grid";

  let apiUrl;
  if (slug) {
    apiUrl = `https://dummyjson.com/products/category/${slug}`;
  } else {
    apiUrl = `https://dummyjson.com/products`;
  }

  let apiRes = await fetch(apiUrl);
  let data = await apiRes.json();
  let { products } = data; //Objects { products:[30Objects],total: }
  let productItem = "";
  products.forEach((obj) => {
    productItem += `<figure class="shadow-lg bg-white">
                    <img src="${obj.thumbnail}" alt="">
                    <h3 class="p-2 text-center font-bold">
                      ${obj.title} 
                    </h3>
                    <h3 class="p-2">Rs  ${obj.price}</h3>
                </figure>`;
  });
  productGridElement.innerHTML = productItem;

  loadinDiv.style.display = "none";

  //End

  // console.log(productItem);

  // console.log(products); //Array ->[ {},{},{},{}  ]
};

CategoryParentElement.addEventListener("click", (event) => {
  // console.log(event.target);
  let clickedSlug = event.target.getAttribute("data-slug");
  // console.log(clickedSlug); //groceries
  getProducts(clickedSlug); //groceries
});

getProducts();

getCategory();

// let obj={
//   a:10,
//   b:20,
//   c:30
// }

// let {a,b}=obj
// console.log(a,b);

//https://dummyjson.com/products/category/furniture
//https://dummyjson.com/products/category/groceries
