function log(record, username) {
  username = username /* ① */ 'Unknown'
  const updated_at = new Date()
  console.log(`/* ② */{record} updated by /* ② */{username} ` +
    `at /* ② */{updated_at}`)
}
