const keys = require('../keys')

module.exports = function (email) {
    return {
        to: email,
            from: keys.EMAIL_FROM,
            subject: 'Password recovery!',
            html: `
               <h1>You forgot your password</h1>
               <p>If not ignore this message</p>
               <p>Otherwise, click on the link below:</p>
               <p><a href="${keys.BASE_URL}/auth/password/${token}">Restore access</a> </p>
               <hr />
               <a href="${keys.BASE_URL}">Shop courses</a> 
               `
    }
}