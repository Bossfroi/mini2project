const data = require('../model/UserDatamodel'); //models design ng google auth at para maka gwa ng document structure sa mongodb
const router = require('express').Router();
router.post('/addOrUpdateUserdata', async (req, res) => {

    const { companyname, companyaddress, businesstype, companynumber } = req.body;
    const hook = user.email;
    
  console.log(hook)
    try {
        const existingRecord = await data.findOne({ hook });
        if (existingRecord) {
            existingRecord.companyname = companyname;
            existingRecord.companyaddress = companyaddress;
            existingRecord.businesstype = businesstype;
            existingRecord.companynumber = companynumber; 
            await existingRecord.save();
            
            res.json('Record was updated!');
        } else {

            const Userdata = new googleauth({ companyname, companyaddress, businesstype, companynumber });
            await Userdata.save();
            res.json('New Record Added!');
        }
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;

