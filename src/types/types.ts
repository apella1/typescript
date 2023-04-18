function add(a: number, b: number): number
function add(a: string, b: string): string
function add(a, b) {
    return a + b
}

const three = add(1, 2)
console.log(three)

const twelve = add("1","2")
console.log(twelve)

