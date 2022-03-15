function receivesAFunction(inputFunc) {
    return inputFunc()
}

function returnsANamedFunction () {
    let namedFunc = x => x+1
    return namedFunc 
}

function returnsAnAnonymousFunction() {
    return function(x) {
        x+1
    }
}