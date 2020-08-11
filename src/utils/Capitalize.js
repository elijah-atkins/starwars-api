function Capitalize(str){
    if (str === 'n/a'){
        return str.toUpperCase();
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
export default Capitalize