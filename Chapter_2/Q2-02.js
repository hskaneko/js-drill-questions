function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask(
  "次の操作を始めてもいい？",
  /* ① */() { alert("移動する！") },
  /* ① */() { alert("このページに留まる") }
)
