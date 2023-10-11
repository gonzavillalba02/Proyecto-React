export const validUsername = (username) => {//username entre 5 y 25 caracteres
    return((username.length >= 5 && username.length <=25) ? true : false)
}

//email entre 8 y 50 caracteres e incluir el @
export const validEmail = (email) => (email.length >= 8 && email.length <= 50 && email.includes('@') ? true : false)

//constraseña entre 8 y 50 y contenes # - _
export const validPass = (pass) => (pass.length>=8 && pass.length<=50 && (pass.includes('#') || pass.includes('-') || pass.includes('_')) ? true : false)