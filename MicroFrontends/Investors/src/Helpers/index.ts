export const getHeaderName: (name:string) => string = (name) => {
    let headerName = "";
    const arr = name.split(/(?=[A-Z])/);
    
    arr.forEach( el => {
        headerName = headerName + " " + el;
      })

    return headerName.toUpperCase();

};

export const formatNumber: (num: number)=>string = (num) => {
  if (num >= 1e9) {
      return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
  } else if (num >= 1e6) {
      return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
      return num.toString();
  }
}