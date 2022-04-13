const LinkedList = require("./linked-list");
/** Node: node for a singly linked list. */

class Node {
    val = null;
    next = null;
  
    constructor(val) {
      this.val = val;
    }
  }


function sortSorted(list1, list2){
    //merge sort -- push the smaller of the two
    let newList = new LinkedList();
    let pointer1 = list1.head;
    let pointer2 = list2.head;
    
    
    while(pointer1 != null && pointer2 != null){
        if(pointer1.val < pointer2.val){
            newList.push(pointer1.val);
            pointer1 = pointer1.next;
        }
        else{
            newList.push(pointer2.val);
            pointer2 = pointer2.next;
        }
    }
    let remainder = null;
    if(pointer1 != null){
        remainder = pointer1;
    }
    if(pointer2 != null){
        remainder = pointer2
    }
    if(remainder){
        while(remainder != null){
            newList.push(remainder.val);
            remainder = remainder.next;
        }
    }    
    newList.print();
    return newList;
    
}

module.exports = {
    sortSorted,
  };
  