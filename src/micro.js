import {Rel} from "rel"

new Prx({
    get: p=> {
        const rel = Rel.fromString(p)
    }
})

export const rules = {
    displayName: async {Person: t, first, last}=>
        await t && await name[sch.FirstName].value + " " + await name[sch.LastName].value,
    age: async {Person: t, birthYear}=>
        await t && await year - await birthYear,
    mainPub: async {[sch.sciencePub[sch.Book + sch.Paper[sch.$MinimalPaper]]]: y}=> await y,
})
