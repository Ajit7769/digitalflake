const cityModel = require('../modal/City.js');

const addCity = (req , res) =>{
   const {cityname , citycode , status , state} = req.body;
   const city = new cityModel({cityname , citycode , status , state});
   city.save().then(()=>{
    res
    .status(200)
    .json({ success: true, Massage: "City Created Successfully", city });
  }).catch(() =>{
    res
    .status(404)
    .json({ success: false, Massage: "City is created already"});
  });
}


const updateCity =async (req , res) =>{
    const id = req.params.id;
    const cityUpdate = await createModel.findByIdAndUpdate(id, req.body, {new : true});
    if(!cityUpdate){
        res.status(404).json({success : false , Massage : "City Not Fount"})
    }
    res
     .status(200)
     .json({ success: true, cityUpdate });
}

const allCity = async (req , res) =>{
    const city = await cityModel.find();
    if(city === 0){
      res
      .status(404)
      .json({ success: false, Massage: "City is not found please add state ..."});
    }
    res
    .status(200)
    .json({ success: true, city });
}

module.exports = {addCity , updateCity , allCity}