const express = require('express');
const { addState,  allState, updateState } = require('../controller/StateController');
const { addCity,  updateCity, allCity } = require('../controller/CityController');
const { addWearhouse, allWearhouse, updateWearhouse, findState } = require('../controller/WearhouseController');
const { addAdmin, adminlogin } = require('../controller/AdminController');

const router = express.Router();

router.post('/addadmin' , addAdmin)

router.post('/adminlogin' , adminlogin)

router.post('/addstate' , addState)
router.get('/allstate' , allState)
router.post('/updatestate/:id' , updateState)


router.get('/allcity' , allCity)
router.post('/addcity', addCity)
router.post('/updatecity/:id' , updateCity)


router.post('/addwearhouse' , addWearhouse)
router.get('/allwearhouse' , allWearhouse)
router.post('/updtatehouse/:id' , updateWearhouse)

module.exports = router;