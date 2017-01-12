import {indexOr, subtr, indizes} from "helper"

const int = parseInt
const O = Object

class Item {
    key
    indent

    static fromString(ln) {
        let indent = Item.getIndent(ln)

        return new Item(indent, line.substr(indent))
    }

    static getIndent([...chs]) {
        return chs.reduce((indent, r)=> )
    }

    constructor(indent, key, rel = new Rel()) {
        O.assign(this, {indent, key, rel})
    }
}

export class Rel {
    static fromString(str) {
        const arr = str.split("\n")
        const reducer = ({src, ...l}, r)=> {
            const item = Item.fromString(r)
            //TODO convert rels to items
            const rels = {
                ...l.rels.filter((e, i)=> item.indent > int(i)),
                [item.indent]: item.rel,
            }

            const relIs = indizes(l.rels)
            const dadI = relIs[indexOr(relIs, item.indent)-1]
            const dad = l.rels[dadI]

            const sinks =
                  l.indent < item.indent
                ? l.sinks
                : [...l.sinks, item.rel]

            dad[itemK] = item.rel
            return {
                rels,
                last: item,
                src,
                sinks,
            }
        }
        const src = new Rel()
        const init = {
            lvls: {-1: src},
            lvlNr: -1,
            lvl: src,
            src,
            sinks: [],
        }
        const {src, sinks} = arr.reduce(reducer, init)

        return {src, sinks} //TODO single return
    }

    toString() {
        const [...ks] = this
        ks.map({k, e}=> x(e.toString())) //TODO
    }
}

export class Node extends Item {
    dad
    child

    static fromString(str) {
        const items = Node.tokenize(str.split("\n"))
        items.reduce((l, r)=> cmp(
            l.indent - r.indent,
            new Node(),

        ))
    }

    static tokenize(lns) {
        return lns.map(Item.fromString)
    }

    constructor(dad) {

    }
}

export class Graph {
    static fromString(str) {
        new Graph(Node.fromString(str))
    }

    constructor(node) {
        O.assign(this, {

        })
    }
}
