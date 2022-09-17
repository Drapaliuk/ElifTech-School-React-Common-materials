let forWatcher = 0

const foo = () => {
    let innerVariable = 10

    return () => a
}

forWatcher = 22

const testClosure = foo()

const counter = 100
const recurse = (counter) => {
    if (counter >= 10) return
    else recurse(counter + 1)
}
recurse(0)

forWatcher = 124
forWatcher = 32

const customArrayMethods = {
    double(int) {
        return int * 2
    }
}

forWatcher = 890

const exampleArr = [22, 41, 12, 87, 24]
const handler = function(el) {
    return this.double(el)
}
const double = exampleArr.map(handler, customArrayMethods)
