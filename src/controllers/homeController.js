let getHomePage = (req, res) => {
    return res.send('Hello world homecontroller')
}
module.exports = {
    getHomePage: getHomePage
}