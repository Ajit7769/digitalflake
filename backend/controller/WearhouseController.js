const wearhouseModel = require('../modal/Wearhouse.js')
const createModel = require('../modal/State.js')

const addWearhouse = (req , res) =>{
    const {wearhousename , city , state} = req.body;
    const wearhouse = new wearhouseModel({wearhousename , city , state});
    wearhouse.save().
    then(()=>{
        res
        .status(200)
        .json({ success: true, Massage: "Wearhouse Created Successfully", wearhouse });
      }).catch(() =>{
        res
        .status(404)
        .json({ success: false, Massage: "Wearhouse is created already"});
      });
}

const updateWearhouse =async (req , res) =>{
    const id = req.params.id;
    const wearhouseUpdate = await wearhouseModel.findByIdAndUpdate(id, req.body, {new : true});
    if(!wearhouseUpdate){
        res.status(404).json({success : false , Massage : "Wearhouse Not Fount"})
    }
    res
     .status(200)
     .json({ success: true, wearhouseUpdate });
}

const allWearhouse = async (req,res) =>{
    const wearhouseData = await wearhouseModel.find();
    if(wearhouseData === 0){
        res
    .status(404)
    .json({ success: false, Massage: "wearhouse is not found please add state ..."});
    }
    res
    .status(200)
    .json({ success: true, wearhouseData });
    
}



module.exports = { addWearhouse , allWearhouse , updateWearhouse }