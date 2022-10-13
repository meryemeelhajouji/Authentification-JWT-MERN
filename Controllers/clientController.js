// method : get
// url : api/user/client/me
// acces : private
const getUserClient =  (req,res) => {
    res.json("bonjour client")
}


module.exports = {
    getUserClient
}
