//options not requiring secrecy

var options = require('./options')

module.exports = {
    options: {
        ...options,
        iss: 'node-vue-template'
    }
}