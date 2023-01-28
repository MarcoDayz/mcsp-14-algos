class Stack {
    constructor(){
        this.stack = []
    }

    push(item){
        this.stack.push(item)
        return this.stack
    }

    pop(){
        if(this.stack.length === 0) return `Stack is empty`
        else this.stack.pop()
        return this.stack
    }

    print(){
        return this.stack
    }

    size(){
        return this.stack.length
    }

    peek(){
        return this.stack[this.stack.length -1]
    }

    isEmpty(){
        return this.stack.length === 0 
    }

    clear(){
        return this.stack = []
    }
}

const bookStack = new Stack()

bookStack.push('Harry Potter')
bookStack.push('Lord of the Rings')
bookStack.push('Blues Clues')
bookStack.push('The Last of Us')

// console.log(bookStack.isEmpty())
// console.log(bookStack.peek())
// console.log(bookStack.size())
// console.log(bookStack.clear())
// console.log(bookStack.print())

