import jwt from 'jsonwebtoken'

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })

    res.cookie("token", token, {
        httpOnly: true, // security to prevent the cookie to be accessible to the client side (XSS attack)
        secure : process.env.NODE_ENV === 'production', // on se met en mode https seulement si on est en production
        sameSite: 'strict', //prevent CSRF attack
        maxAge: 7 * 24 * 60 * 60 * 1000 //7 days
    })

    return token

}