const regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
const example_text = `sdabhikagathara@rediff.mail.com, 
  "assdsdf" <dsfassdfhsdfarkal@gmail.com>, 
  "rodnsdfald ferdfnson" <rfernsdfson@gmal.com>, ...`

const emails = example_text./* ① */(regex)

console.log(emails) // 出力例：[
                    //  'sdabhikagathara@rediffmail.com',
                    //  'dsfassdfhsdfarkal@gmail.com',
                    //  'rfernsdfson@gmal.com']
