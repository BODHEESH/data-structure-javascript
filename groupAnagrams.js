const str = ["bat", "rat", "hot", "tab", "tar", "oht", "abt", "art"];

// by finding key from a string and pushing values to it

const anagramFind = (str) => {
  let map = {};
  let result = [];

  for (let items of str) {
    let key = items.split("").sort().join("");

    if (map[key]) {
      map[key].push(items);
    } else {
      map[key] = [items];
    }
  }
  result = Object.values(map);
  return result;
  // console.log(map);
};

console.log(anagramFind(str));

// finding key with CharAT method

// const anagramFind2 = (str) => {
//   let map = {};
//   let result = [];
//   for (let items of str) {
//     let key = 0;

//     for (let char of items) {
//       key += char.charCodeAt();
//       console.log("Items-", items, "Char-", char);
//       console.log(key);
//     }

//     if (map[key]) {
//       map[key].push(items);
//     } else {
//       map[key] = [items];
//     }
//   }
//   result = Object.values(map);
//   return result;
//   // console.log(map);
// };

// console.log(anagramFind2(str));