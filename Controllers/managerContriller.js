// method : get
// url : api/user/manager/me
// acces : private
const getUserManager =  (req,res) => {
    res.json("hi  manager")
}


module.exports = {
    getUserManager
}
