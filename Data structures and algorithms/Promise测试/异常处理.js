// try {
    let p = new Promise((resolve, reject) => {
        throw new Error("I'm error");
        // reject(new Error("I'm Error"));
    });
// }catch(e) {
//     console.log('catch',e);
// }


p.catch(result => {
    console.log(result);
});

