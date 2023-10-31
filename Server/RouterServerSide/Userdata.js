const data = require('../model/UserDatamodel');
const router = require('express').Router();

router.post('/addOrUpdateUserdata', async (req, res) => {
  const { companyname, companyaddress, businesstype, companynumber } = req.body;

  // Assuming the client sends the user's email as a request parameter
  const userEmail = req.body.email;

  try {
    // Retrieve data from localStorage (not necessary on the server-side)
    // const user = localStorage.getItem('email');

    // Use the email parameter to query the database
    const existingRecord = await data.findOne({ email: userEmail });
    if (existingRecord) {
      existingRecord.companyname = companyname;
      existingRecord.companyaddress = companyaddress;
      existingRecord.businesstype = businesstype;
      existingRecord.companynumber = companynumber;
      await existingRecord.save();
      res.json('Record was updated!');
    } else {
      const userData = new data({
        email: userEmail, // Assuming you have an 'email' field in your UserDatamodel
        companyname,
        companyaddress,
        businesstype,
        companynumber,
      });
      await userData.save();
      res.json('New Record Added!');
    }
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
