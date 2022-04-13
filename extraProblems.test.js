const {pivot, sortSorted} = require("./extraProblems");
const LinkedList = require("./linked-list");

const sortedList1 = new LinkedList([1,3,5,7]);
const sortedList2 = new LinkedList([2,4,6,8]);
const sortedList3 = new LinkedList([1,3,5,10]);
const sortedList4 = new LinkedList([6,7,8,9,10]);

const unsortedList1 = new LinkedList([6,1,8,4,10,7,8,4,2,89]);
const unsortedList2 = new LinkedList([7, 6, 2, 3, 9, 1, 1]);
const unsortedList3 = new LinkedList([7, 6, 2, 5, 3, 5, 9, 1, 1]);



describe("sortSorted", function(){
    it("returns a sorted list when given two sorted lists", function(){
        expect(sortSorted(sortedList1, sortedList2).head.val).toBe(1);
        expect(sortSorted(sortedList1, sortedList2).tail.val).toBe(8);
        expect(sortSorted(sortedList1, sortedList2).length).toBe(8);
    });

    it("returns an empty list when given two empty lists", function(){
        expect(sortSorted(new LinkedList(), new LinkedList()).head).toBe(null);
        expect(sortSorted(new LinkedList(), new LinkedList()).tail).toBe(null);
        expect(sortSorted(new LinkedList(), new LinkedList()).length).toBe(0);
    })

    it("returns aa sorted list with lopsided data", function(){
        expect(sortSorted(sortedList3, sortedList4).head.val).toBe(1);
        expect(sortSorted(sortedList3, sortedList4).head.next.next.val).toBe(5);
        expect(sortSorted(sortedList3, sortedList4).tail.val).toBe(10);
        expect(sortSorted(sortedList3, sortedList4).length).toBe(9);
    })
})

describe("pivot", function(){
    it("pivots", function(){
        unsortedList1.pivot(2);
        expect(unsortedList1.head.val).toBe(1);
    });

   
})