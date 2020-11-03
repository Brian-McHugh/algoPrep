// Feel free to add new properties and methods to the class.
class MinMaxStack {
	constructor() {
		this.storage = [];
		this.minValStorage = [];
		this.maxValStorage = [];
	}
	
	// O(1) time | O(1) space
  peek() {
    return this.storage[this.storage.length-1];
  }

	// O(1) time | O(1) space
  pop() {
		this.minValStorage.pop();
		this.maxValStorage.pop();
		return this.storage.pop();
  }
  
	// O(1) time | O(1) space
  push(number) {
    this.storage.push(number);
		
		if (!this.minValStorage.length ||
			  number <= this.minValStorage[this.minValStorage.length-1]) {
		  this.minValStorage.push(number);
		} else {
			this.minValStorage.push(this.minValStorage[this.minValStorage.length-1]);
		}
		
		if (!this.maxValStorage.length ||
			  number >= this.maxValStorage[this.maxValStorage.length-1]) {
			this.maxValStorage.push(number);
		} else {
			this.maxValStorage.push(this.maxValStorage[this.maxValStorage.length-1]);
		}
  }
  
	// O(1) time | O(1) space
  getMin() {
    return this.minValStorage[this.minValStorage.length-1];
  }
  
	// O(1) time | O(1) space
  getMax() {
    return this.maxValStorage[this.maxValStorage.length-1]
  }
}


// Testing
// const example = new MinMaxStack();
// example.push(4);
// example.push(3);
// console.log(example.getMin());
// example.push(3);
// example.push(2);
// example.push(2);
// console.log(example.getMin());
// console.log(example.getMax());
