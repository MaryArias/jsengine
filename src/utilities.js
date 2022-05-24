getRandomBoolean = () => !!Math.floor(Math.random() * 2)
getRandomNumberBetweenNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

module.exports = {
    getRandomBoolean,
    getRandomNumberBetweenNumbers,
    pipe
}