module.exports = function() {
  return {
    hotcat: require('./cookbook-hotcat.json'),
    list: require('./cookbook-list.json'),
    category: require('./cookbook-category.json'),
    detail: require('./cookbook-detail.json')
  }
}
// {
//   "data": [
//     {
//       "id": 0,
//       "x": 100
//     },
//     {
//       "id": 1,
//       "x": "2000"
//     },
//     {
//       "x": "300",
//       "id": 2
//     }
//   ]
// }