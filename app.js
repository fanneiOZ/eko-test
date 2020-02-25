console.log('------------Problem#1-------------')
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

console.log('------------Problem#2-------------')
const two = ["foo(bar)", "(bar)", "foo(bar)blim", "foo(foo(bar))blim"];

function testTwoRemoveP(item) {
  let nestedWord = trimParenthesis(item);

  if (nestedWord.indexOf("(") !== -1) {
    nestedWord = testTwoRemoveP(nestedWord);
  } else {
    nestedWord = item.replace(
      "(" + nestedWord + ")",
      removeAndReverse(nestedWord)
    );
  }
  let replaceWord = item.replace(
    "(" + trimParenthesis(item) + ")",
    removeAndReverse(trimParenthesis(item))
  );

  if (replaceWord.indexOf("(") >= 0) {
    return testTwoRemoveP(replaceWord);
  }
  return replaceWord;
}

function trimParenthesis(word) {
  const firstOpenP = word.indexOf("(");
  const lastOpenP = word.lastIndexOf(")");
  let nestedWord = word.substr(firstOpenP + 1, lastOpenP - firstOpenP - 1);
  if (nestedWord.indexOf("(") === -1) {
    return nestedWord;
  } else {
    return trimParenthesis(nestedWord);
  }
}
function removeAndReverse(word) {
  return word
    .split("")
    .reverse()
    .join("");
}

two.forEach(element =>
  console.log(element + ' => ' + testTwoRemoveP(element))
);
