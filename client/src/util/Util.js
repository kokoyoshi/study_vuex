export default {
  hasBothId (ids, id) {
    for (let i = 0; i < ids.length; i++) {
      if (ids[i].id === id) {
        return true
      }
    }
    return false
  }
}