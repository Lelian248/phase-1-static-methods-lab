class Formatter {
  //add static methods here
  static capitalize(element){
    return element.charAt(0).toUpperCase() + element.slice(1)
  }

  static sanitize(element){
    return element.replace(/[^-,'A-Za-z ]+/g, '')
  }

  static titleize(element){
    const common = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by',  'from']
    var wordArr = element.match(/\w+/g),
        commonObj = {},
        uncommonArr = [],
        word, i;
    console.log(wordArr)
    for ( i = 0; i < common.length; i++ ) {
        commonObj[ common[i].trim() ] = true;
    }
    
    for ( i = 0; i < wordArr.length; i++ ) {
        word = wordArr[i].trim().toLowerCase();
        if ( !commonObj[word] ) {
            const finalword = word.charAt(0).toUpperCase() + word.slice(1)
            uncommonArr.push(finalword);
        }else if(commonObj[word] && i== 0 ){
          const finalcommon = word.charAt(0).toUpperCase() + word.slice(1)
          uncommonArr.push(finalcommon);
        }else if(commonObj[word] && i!==0 ){
          uncommonArr.push(word);
        }
    } 
    let cap = uncommonArr.join(" ")
    console.log(cap)
    return cap
  }
}

Formatter.titleize( "where the wild things are" )

Formatter.titleize( "a tale of two cities" )