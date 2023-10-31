const data = require('../model/UserDatamodel'); // Import the UserDatamodel
const router = require('express').Router();

router.post('/addOrUpdateUserdata', async (req, res) => {
    const { companyname, companyaddress, businesstype, companynumber } = req.body;

    // Assuming 'email' is part of the request body
    const { email } = req.body;
    
    try {
        // Check if a record with the given 'email' exists in the database
        const existingRecord = await data.findOne({ email });

        if (existingRecord) {
            // Update the existing record with the new data
            existingRecord.companyname = companyname;
            existingRecord.companyaddress = companyaddress;
            existingRecord.businesstype = businesstype;
            existingRecord.companynumber = companynumber;

            await existingRecord.save();

            res.json('Record was updated!');
        } else {
            // Create a new record
            const newUserdata = new data({ email, companyname, companyaddress, businesstype, companynumber });
            await newUserdata.save();

            res.json('New Record Added!');
        }
    } catch (err) {
        res.status(500).json({ error: 'An error occurred: ' + err });
    }
});

module.exports = router;
