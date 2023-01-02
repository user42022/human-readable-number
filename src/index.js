module.exports = function toReadable (number) {
  let dictionaryDigits = ['','one','two','three','four','five','six','seven','eight','nine'];
  let dictionaryDozens = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let hundred = 'hundred';
  let dictionaryTeens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let numberStr = number + '';
  switch (numberStr.length){
    case (3):
        return (dictionaryDigits[+numberStr[0]]+' '+hundred+(+numberStr[1]===1 ? ' '+dictionaryTeens[+numberStr[2]] : (dictionaryDozens[+numberStr[1]]==='' ? '':' ')+dictionaryDozens[+numberStr[1]]+' '+dictionaryDigits[+numberStr[2]])).trimEnd()
  
    case (2):
        return (+numberStr[0]===1 ? dictionaryTeens[+numberStr[1]] : dictionaryDozens[+numberStr[0]]+' '+dictionaryDigits[+numberStr[1]]).trimEnd()
    case (1):
        return number===0 ? 'zero': dictionaryDigits[+numberStr[0]]
  }
}
