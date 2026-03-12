(function chai() {
    console.log(`DB CONNECTED`)
})();  //semicolon ; is mandatory because iife doesnt know where to stop when it gets invoked so use this to end the

//chai()
//sometimes programming looks poluted for global scopes , so the variables declared in global scope to eradicate its pollution we use iife (immediately invoked function expression )

((name) => {
    console.log(`DB is connected for ${name}`)
})('hitesh')