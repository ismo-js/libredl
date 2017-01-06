import {sch} from "micro"

const MD = Symbol("MICRO_DEST")
const LVL = Symbol("LEVEL")
const int = parseInt
function x(str) {
    const arr = str.split("\n")
    arr.reduce(
        (l, r)=> {
            let lvlNr = 0
            for (let e of r) if (" " === e) lvlNr++ else break

            const rels =
                  l.lvlNr < lvlNr
                ? {}
                : do {
                    const lvlNrs = Object.keys(l.lvls).sort((a, b)=> int(a) - int(b))
                    const preNr = lvlNrs[lvlNrs.indexOf(lvlNr)-1]
                    return l.lvls[preNr]
                }
            const lvls = {
                ...l.lvls.filter((e, k)=> lvlNr > int(k)),
                [lvlNr]: rels,
            }

            return {
                lvlNr,
                lvls,
                rels,
            }
        }
    )
}

new Prx({
    get: p=>
})

export const rules = {
    displayName: async {Person: t, first, last}=>
        await t && await name[sch.FirstName].value + " " + await name[sch.LastName].value,
    age: async {Person: t, birthYear}=>
        await t && await year - await birthYear,
    mainPub: async {[sch.sciencePub[sch.Book + sch.Paper[sch.$MinimalPaper]]]: y}=> await y,
})
