class Sorter {
  constructor() {
    this.array=[];
    this.compareFunction = (a, b) => (a - b);
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) { 
    indices.sort();
    let TempArray=this.array;
    let SortArr=[];

    indices.forEach(function(value,i){
      SortArr[i]=this[value];
    },TempArray);

    SortArr.sort(this.compareFunction);

    indices.forEach(function(value,i){
      this[value]=SortArr[i];
    },TempArray);  
    this.array=TempArray;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;