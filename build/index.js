"use strict";
// class Sorter {
// 	collection:number[];
// 	constructor(collection: number[]) {
// 		this.collection = collection;
// 	}
// }
var Sorter = /** @class */ (function () {
    // "|" union type
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        //bubble sorting
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                //Type guards
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        var indexLeftSide = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = indexLeftSide;
                    }
                }
                if (typeof this.collection === 'string') {
                    this.collection.
                    ;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
