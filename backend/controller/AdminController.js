const adminModel = require('../modal/Admin.js')
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken')

const addAdmin =  (req , res) =>{
    const {email , password} = req.body;
    bcrypt.genSalt(10,(err, salt)=>{
        bcrypt.hash(password, salt, (err , hash)=>{
            const admin = new adminModel({email , password : hash});
            admin.save().then(()=>{
                res
                .status(200)
                .json({ success: true, Massage: "User Created Successfully", user });
              }).catch(() =>{
                res
                .status(404)
                .json({ success: false, Massage: "User is created already"});
            })
        })
    })
}

const adminlogin = async (req , res) =>{
    const findAdmin = await adminModel.findOne({email : req.body.email});
    if(!findAdmin){
        res
        .status(404)
        .json({ success: false, Massage: "Smothing Went Wrong...!!!"});
    }
    bcrypt.compare(req.body.password ,findAdmin.password ,function (err , result){
        if(result){
            const token = jsonwebtoken.sign({email : findAdmin.email}, "AjitSarwade")
            res.status(200).json({success : true , Massage : "Yes You can Login"})
        }
          else res.status(404).json({success : false , Massage : "Somting is wrong"})
    })

}

module.exports = {addAdmin , adminlogin}