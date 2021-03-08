module.exports = function check(str, bracketsConfig) {
    let cfg   = rebuildConfig(bracketsConfig);
    let stack = new Stack();

    for (let x of str) {
        if (stack.isEmpty() || cfg[x] != stack.head()) {
            stack.push(x);
        } else {
            stack.pop();
        }
    }
    return stack.isEmpty();
}

function rebuildConfig(bracketsConfig) {
    let cfg = {};
    for (let pair of bracketsConfig) {
        cfg[pair[1]] = pair[0];
    }
    return cfg;
}

class Stack {
    constructor() {
        this._list = [];
    }

    push(x) {
        this._list.push(x);
    }
    
    pop() {
        return this._list.pop();
    }

    head() {
        return this._list[this._list.length - 1];
    }

    isEmpty() {
        return this._list.length == 0;
    }
}
