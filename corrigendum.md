# JavaScript基礎ドリル　正誤表

- 『[JavaScript基礎ドリル穴埋め式](https://www.ohmsha.co.jp/book/9784274226199/)』の正誤表です
- いずれも、本リポジトリのソースコード上では修正済みです

|訂正箇所と内容|訂正前|訂正後|
|----|----|----|
|p.121 問4-29　<br>下から10行目<br>コードの訂正 | const line = "@".repeat(this.text.length + **3**) | const line = "@".repeat(this.text.length + **2**) |
|p.186 問7-7　<br>4、5行目<br>記述の不足と訂正 | if (!number.value.match(**constraints**[④][0])) {<br>   number.⑤(**msg**)  | if (!number.value.match(**divisions**[④][0])) {<br>    number.⑤(**divisions[④][1]**) |
|p.237 問9-8　<br>12行目<br>補足説明 | そして、「npm run start」とコマンド入力すれば、 | そして、**「npm start」あるいは**「npm run start」とコマンド入力すれば、 |

