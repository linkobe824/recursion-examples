let company = {
  // the same object, compressed for brevity
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 },
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

const sumSalaries = (department) => {
  let total = 0;
  if (Array.isArray(department)) {
    let subdepSum = 0;
    for (let employee of department) {
      subdepSum += employee.salary;
    }
    return subdepSum;
  } else {
    for (let subdep of Object.values(department)) {
      total += sumSalaries(subdep);
    }
    return total;
  }
};

console.log(sumSalaries(company));
