// Write a function called contains that searches for a value
//  in a nested object. It returns true if the object
//  contains that value.
const nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

const contains = (obj, val) => {
  if (obj === val) {
    return true;
  } else {
    for (let data of Object.values(obj)) {
      return contains(data, val);
    }
  }
  return false;
};

const hasIt = contains(nestedObject, 44); // true
const doesntHaveIt = contains(nestedObject, "foo"); // false

console.log(hasIt);
console.log(doesntHaveIt);
