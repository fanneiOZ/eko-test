const one = [
  "AMOR",
  "XISELA",
  "JAMON",
  "ROMA",
  "OMAR",
  "MORA",
  "ESPONJA",
  "RAMO",
  "JAPONES",
  "ARMO",
  "MOJAN",
  "MARO",
  "ORAM",
  "MONJA",
  "ALEXIS"
];

function testOneGroupingString(list) {
  var sortedItem = Array.from(list).map(element => {
    return {
      original: element,
      output: element
        .split("")
        .sort()
        .join("")
    };
  });

  var result = new Array();
  var buffer = [];
  sortedItem.forEach(element => {
    const originalValue = element.original;
    const checkGroup = element.output;

    if (buffer.indexOf(checkGroup) == -1) {
      result.push({ group: checkGroup, list: Array.from([originalValue]) });
      buffer.push(checkGroup);
    } else {
      result.forEach(element => {
        if (element.group === checkGroup) {
          let arrTmp = Array.from(element.list);
          arrTmp.push(originalValue);
          element.list = arrTmp;
        }
      });
    }
  });

  return result;
}

var result = testOneGroupingString(one);

result.forEach(element => {
  const list = Array.from(element.list);
  console.log(list.join(" - "));
});



// const two = ['foo(bar)'];
// // ,'(bar)','foo(bar)blim','foo(foo(bar))blim'];

// function testTwoRemoveP(item) {
//   const length = item.length();
//   const firstOpenP = item.indexOf("\(");
//   const lastOpenP = length - Array.from(item.split('')).reverse().join('').indexOf(")");
  
//   return {firstOpenP, lastOpenP};
// }


// two.forEach(element => console.log(testTwoRemoveP(element)));