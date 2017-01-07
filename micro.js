import {sch} from "micro"
import {indexOr, subtr, indizes} from "helper"

const MD = Symbol("MICRO_DEST")
const LVL = Symbol("LEVEL")
const int = parseInt

class Rel {}


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

        const indentin = l.lvlNr < lvlNr
        const sinks =
              indentin
            ? l.sinks
            : [...l.sinks, lvl]

        dad[rel] = lvl
        return {
            lvls,
            lvlNr,
            lvl,
            src: l.src,
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

    return {src, sinks}
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
