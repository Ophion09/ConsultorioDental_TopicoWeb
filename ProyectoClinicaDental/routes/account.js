// account.js routes
const express = require('express');
const account = require('../controllers/account.js');

const router = express.Router();

router
.route('/')
.get(account.getAccounts)
.post(account.addAccount);

router
.route('/:id')
.get(account.getAccountsById)
.delete(account.deleteAccount)
.patch(account.updateAccount);

router
.route('/idPatient/:id')
.get(account.getAccountsByIdPatient)
.delete(account.deleteAccountByIdPatient);

module.exports = router;