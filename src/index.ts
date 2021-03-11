// class Sorter {
// 	collection:number[];

// 	constructor(collection: number[]) {
// 		this.collection = collection;

// 	}
// }

class Sorter {
	// "|" union type
	constructor(public collection: number[] | string) {}

	sort(): void {
		const { length } = this.collection;
		//bubble sorting
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				//Type guards
				if (this.collection instanceof Array) {
					if (this.collection[j] > this.collection[j + 1]) {
						const indexLeftSide = this.collection[j];
						this.collection[j] = this.collection[j + 1];
						this.collection[j + 1] = indexLeftSide;
					}
				}

				console.log("test")

				if(typeof this.collection === 'string') {
					this.collection.
				}
			}
		}
	}
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
