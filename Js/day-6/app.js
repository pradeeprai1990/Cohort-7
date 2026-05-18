//Simple Function

function displayData(){
    console.log("Welcome");
    
}


// function addData(){
//     console.log(10+20);
    
// }

// addData()
// addData()
// addData()
// addData()
// addData()
// addData()
// displayData()

// displayData()

// displayData()


// Argument function
// function addData(num1=0,num2=0){
//     console.log(num1+num2); //10+20
    
// }
// addData(10,20)

// addData(99,50)

// addData(78,99)

// addData(66)

// addData() 

// addData(36)
 

// Number("10") //Number- 10


// Number()


// function mulData(value1,value2){
//     console.log(value1*value2);
    
// }

// mulData(25,99)


// function addData(){
     
//     return 10
    
    
// }


// let outPut=addData() //10

// console.log(outPut);


// let outPut=Number("10")
// console.log(outPut);

// function addData(value1,value2){
//     return value1+value2
// }


// let outPut=addData(10,20)
// console.log(outPut);


// function arrayOfsum(arr){
//     let sum=0
//     for(let v of arr){
//         sum=sum+v  
//     }
//     return
// }


// let outPut= arrayOfsum([10,66,77,88,55])
// console.log(outPut);


// let output2=arrayOfsum([10,66,77,22,12])
// console.log(output2);


let addData=(num1,num2)=> num1+num2


console.log(addData(25,99));

let mulData=(v1,v2)=>{
    return v1*v2
}
  

// console.log(mulData(25,99));
 

// let l=[10,20,30,40,50]

// let [a,b,...rest]=l
// console.log(a,b);
// console.log(rest);




function checkLogin(username,password){
    if(username=="ws"){
        if(password=="123"){
            return "User Login Done"
        }
        else{
           return "Invalid Password" 
        }
    }
    else  {
        return "Invalid userName"
    }
}


let checkStatus= checkLogin("ws","123")
console.log(checkStatus);
