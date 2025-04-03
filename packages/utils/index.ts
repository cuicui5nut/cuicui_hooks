export const formatRoute = (word : string)=> {
    const regex = /\buse([A-Z][a-z]+)+\b/;
    if (regex.test(word)) {
      return word.replace(/([A-Z])/g, '-$1').toLowerCase();
    }
    return word; 
  }