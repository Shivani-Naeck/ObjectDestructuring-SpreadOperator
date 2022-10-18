// Exercise 1 - Destructuring
// todo Access the value "result" using only destructuring
const obj = {
  foo: "",
  bar: "",
  baz: {
    foo1: "",
    bar1: "",
    baz2: {
      foo2: "",
      bar2: {
        foo3: {
          result: "Yay!",
        },
      },
    },
  },
};

// console.log(foo3); // should console log "Yay!"

const {
  baz: {
    baz2: {
      bar2: {
        foo3: { result },
      },
    },
  },
} = obj;
console.log(result);

// Exercise 2 - Spread
// todo create a new object called "obj3" which is obj2 but contains the whole of obj in the bar4 key. ONLY USE SPREAD
const obj2 = {
  foo4: "",
  bar4: {},
};
// ! EXPECTED:
// {
//   foo4: "",
//   bar4: {
//     foo: "",
//     bar: "",
//     baz: {
//       foo1: "",
//       bar1: "",
//       baz2: {
//         foo2: "",
//         bar2: {
//           foo3: {
//             result: "Yay!"
//           }
//         }
//       }
//     }
//   }
// }

const obj3 = { ...obj2, bar4: obj };

console.log(obj3);
