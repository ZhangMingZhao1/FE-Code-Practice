async function demo() {
    let result = await Promise.resolve(123);
    console.log(result);
}
demo();