const createModel = require('../modal/State.js')


const allState = async (req , res) =>{
    const allData = await createModel.find();
    if(allData === 0){
        res
    .status(404)
    .json({ success: false, Massage: "State is not found please add state ..."});
       
    }
    res
    .status(200)
    .json({ success: true, allData });
    
}

const addState = (req , res) =>{
    const {statename , statecode} = req.body;

    const state = new createModel({statename , statecode});

    state.save().then(()=>{
        res
        .status(200)
        .json({ success: true, Massage: "State Created Successfully", state });
      }).catch(() =>{
        res
        .status(404)
        .json({ success: false, Massage: "State is created already"});
      });
}

const updateState =async (req , res) =>{
    const id = req.params.id;
    const stateUpdate = await createModel.findByIdAndUpdate(id, req.body, {new : true});
    if(!stateUpdate){
        res.status(404).json({success : false , Massage : "User Not Fount"})
    }
    res
     .status(200)
     .json({ success: true, stateUpdate });
}


module.exports = {addState , allState , updateState}