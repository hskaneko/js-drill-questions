const cardNum = '1234567890123456'
const email = 'example_email@example.com'

const lastFourDigits = cardNum./* ① */(-4)
const emailParts = email.split('@')

const maskedCardNum = '*'./* ② */(cardNum.length - 4)
                      + lastFourDigits
const maskedEmail = emailParts[0]./* ① */(0,2) 
                    + '*'./* ② */(emailParts[0].length - 2) 
                    + '@' + emailParts[1]

console.log(maskedCardNum) // 出力例：************3456
console.log(maskedEmail)  // 出力例：exa**********@example.com