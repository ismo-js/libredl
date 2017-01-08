import {indexOr, subtr, indizes} from "helper"

const int = parseInt
const O = Object

class Item {
    key
    rel
    indent

    static fromString(line) {
        let indent = 0
        for (let e of line) (" " === e) ? indent++ : break

        return new Item(indent, line.substr(indent))
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
