// var xhr = new XMLHttpRequest();

// xhr.open("GET", "http://api.github.com/users/bugvoid");
// xhr.send(null);

// xhr.onreadystatechange = function() {
//   if (xhr.readyState === 4) {
//     console.log(JSON.parse(xhr.responseText));
//   }
// };

// var minhapromise = function() {
//   return new Promise(function(resolve, reject) {
//     var xhr = new XMLHttpRequest();
//     xhr.open("GET", "http://api.github.com/users/bugvoid");
//     xhr.send(null);

//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         } else {
//           reject("ERro");
//         }
//       }
//     };
//   });
// };

// axios.get('https://api.github.com/users/bugvoid')
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
