const keys = require('../keys')

module.exports = function (email) {
    return {
        to: email,
            from: keys.EMAIL_FROM,
            subject: 'Account created!',
            html: `
               <h1>Welcome to your store</h1>
               <p>You have successfully created an account - ${email}</p>
               <hr />
               <a href="${keys.BASE_URL}">Shop courses</a> 
               `
    }
}