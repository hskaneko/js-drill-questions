function fullName(firstName, ...middleNames, lastName) {
  let fullName = firstName
  for(let i = 0; i < middleNames.length; i++)
    fullName += ' ' + middleNames[i]
  fullName += lastName
  return fullName
}

console.log(fullName("Julius", ["Gaius"], "Cesar"))
// 出力列：/* ① */
