function getTempCalback(location, callback) {
  callback(undefined, 78);
  callback('city not found')

}

// getTempCalback('cypress', function(err, temp){
//   if(err){
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// })
function getTempPromise(location){
  return new Promise(function(resolve, reject){
    resolve(100);
    reject('City Not Found');
  })
}
getTempPromise('LA').then(function(temp){
  console.log('temperature', temp);
}, function(err){
  console.log('error', err);
})
