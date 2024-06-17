let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if (a < 0.5) {
        reject("It is less than 0.5");
    } else {
        setTimeout(() => {
            resolve("You got it");
        }, 1000);
    }
})
prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})