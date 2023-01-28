class Stack {
    constructor(){
        this.count = 0;
        this.items = {};
    }
    push(elem){
        this.items[this.count] = elem
        this.count++
    }
    size(){
        return this.count
    }
    pop(){
        if(this.isEmpty()) return `Error: No items to pop`
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }
    isEmpty(){
        return this.count === 0
    }
    peek(){
        if(this.isEmpty()) return `Error: Stack is empty`
        return this.items[this.count -1]
    }
    clear(){
        this.items = {}
        this.count = 0
        return `Stack is cleared`
    }
    toString(){
        if(this.isEmpty()) return 'Error: No items to string'
        let objString = `${this.items[0]}`
        for(let i = 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`
        }
        return objString;
    }
}

const stack = new Stack()

// stack.push(24)
// stack.push(100)
// stack.push('Some String')

// console.log(stack.size())
// console.log(stack.pop())
// console.log(stack.peek())
// console.log(stack.toString())