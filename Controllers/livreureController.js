
// method : get
// url : api/user/manager/me
// acces : private
const getUserManager =  (req,res) => {
    res.json("bonjour "+req.user.user.name + " votre role est livreur")

}
module.exports = {
    getUserManager
}
