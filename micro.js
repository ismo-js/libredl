import {sch} from "micro"

const MD = Symbol("MICRO_DEST")
const LVL = Symbol("LEVEL")
const int = parseInt

class Rel {}

function indexOr(stack, needle, alt = stack.length) {
    const index = stack.indexOf(needle)
    0 < index ? index : alt
}

function subtr(a, b) {
    return int(a) - int(b)
}

function indizes(a) {
    return Object.keys(a).sort(subtr)
}

function str2Rel(str) {
    const arr = str.split("\n")
    const reducer = (l, r)=> {
        let lvlNr = 0
        for (let e of r) (" " === e) ? lvlNr++ : break

        const lvl = new Rel()
        const lvls = {
            ...l.lvls.filter((e, k)=> lvlNr > int(k)),
            [lvlNr]: lvl,
        }

        const lvlNrs = indizes(a)
        const dadNr = lvlNrs[indexOr(lvlNrs, lvlNr)-1]
        const dad = l.lvls[dadNr]
        const rel = r.substr(lvlNr)

        dad[rel] = lvl
        return {
            ...l
            lvlNr,
            lvls,
        }
    }
    const root = new Rel()
    const init = {
        lvlNr: -1,
        lvls: {-1: root},
        root,
    }

    return arr.reduce(reducer, init).root
}

new Prx({
    get: p=> {
        const rel = str2Rel(p)
    }
})

export const rules = {
    displayName: async {Person: t, first, last}=>
        await t && await name[sch.FirstName].value + " " + await name[sch.LastName].value,
    age: async {Person: t, birthYear}=>
        await t && await year - await birthYear,
    mainPub: async {[sch.sciencePub[sch.Book + sch.Paper[sch.$MinimalPaper]]]: y}=> await y,
})
