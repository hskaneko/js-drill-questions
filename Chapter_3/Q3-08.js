function /* ① */(strings, ...values) {
    let styles = ''
    for (i = 0; i < strings.length; i++) {
      styles += strings[i] + (values[i] || '')
    }
  
    styles = styles.trim().replace(/[\n|\s\s]/gi, "")
  
    return `<div style="${styles}"></div>`
  }
  
  const color = "red"
  const size = "75px"
  
  const div = styledDiv`
    background-color: ${color};
    width: /* ② */;
    height: /* ② */;
    text-align: center;
  `
  
  console.log(div)
  // 出力例：<div style="background-color:red;width:75px;
  //           height:75px;text-align:center;"></div>