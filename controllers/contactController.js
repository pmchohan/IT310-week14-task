const { addContact, contactData } = require('../models/contactModel');

const handleForm = (req, res) => {
  const { name, email, message } = req.body;
  addContact({ name, email, message, submittedAt: new Date() });
  console.log(contactData);
  res.redirect('/thankyou');
};

module.exports = { handleForm };
