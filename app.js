// // // // // // let promise= new Promise((resolve,reject)=>{
// // // // // //     console.log("promise is occured:");
 
// // // // // //     resolve("success");
// // // // // // })
// // // // // function getdata(dataid,getNextData){
// // // // //     return new Promise((resolve,reject)=>{
// // // // //         setTimeout(()=>{
// // // // //             console.log("data:",dataid);
// // // // //             if(getNextData){
// // // // //                 getNextData();
// // // // //             }
// // // // //         },2000)
     
// // // // //     })
// // // // // }
// // // // function getdata (getid,getNextData){
// // // //     return new Promise ((resole,reject)=>{
// // // //         setTimeout(()=>{
// // // //             console.log("data :",getid);
// // // //                 reject("error");
// // // //                 if (getNextData){
// // // //                     getNextData();
// // // //                 }
// // // //         },5000)
// // // //     })
   
// // // // }
// // // let getpromise=()=>{
// // //     return new Promise((resolve,reject)=>{
// // //         console.log("promise fulfilled:")
// // //         reject ("success")
// // //     })
// // // } 
// // //  let promise=getpromise();
// // //  promise.catch(()=>{
// // function promise1(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             console.log("print data1:");
// //             resolve("success1");
// //         },3000)
// //     })
// // }
// // console.log("fetching data1:");
// // let ans=promise1();
// // ans.then((res)=>{
// //     console.log(res);
// //     console.log("data2 fetching:");
// // let ans2=promise2();
// // ans2.then((res)=>{
// //     console.log(res)
// // })
// // })
// // function promise2(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             console.log("print data2:");
// //             resolve("sucess2")
// //         },3000)
// //     })
// // }
// (function promise(){
//     console.log("automatically excuted function with out creating promise statement")
// })();
const url="https://cat-fact.herokuapp.com";
const getfacts= async()=>{
    console.log("getting data ***********");
    let response= await fetch(url);
    console.log(response);
   let data= await response.json();
   console.log(data);
}
 let list=document.querySelector('.box4 box')
 console.dir(document.list)