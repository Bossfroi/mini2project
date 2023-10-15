const router = require('express').Router();
let googleauth = require('../model/googleauthmodel');

// home
router.route('/').get((req, res)=> {

    googleauth.find()
        .then(googleauth => res.json(googleauth))
        .catch(err => res.status(400).json('Error :' + err));

});

// add
router.route('/add').post((req, res)=> {

    const name = req.body.name;
    const family_name = req.body.family_name;
    const email = req.body.email;
    const picture = req.body.picture;

    const newgoogleauthDeclaration = new googleauth({name, family_name, email, picture});

    newgoogleauthDeclaration.save()
        .then(googleauth => res.json('New Record Added!'))
        .catch(err => res.status(400).json('Error :' + err));

});


// details
router.route('/:id').get((req, res)=> {
    googleauth.findById(req.params.id)
    .then(googleauth => res.json(googleauth))
    .catch(err => res.status(400).json('Error: '+ err));
});

// delete
router.route('/:id').delete((req, res)=> {
    googleauth.findByIdAndDelete(req.params.id)
    .then(googleauth => res.json('Record was deleted.'))
    .catch(err => res.status(400).json('Error: '+ err));
});

// update

// update
router.route('/update/:id').post((req, res) => {
    googleauth.findById(req.params.id) 
        .then(googleauth => {
            if (!googleauth) {
                return res.status(404).json('Record not found');
            }

            googleauth.name = req.body.name;
            googleauth.family_name = req.body.family_name;
            googleauth.email = req.body.email;
            googleauth.picture = req.body.picture;

            googleauth.save()
                .then(() => res.json('Record was updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;