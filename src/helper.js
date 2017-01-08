const int = parseInt
const O = Object

export function indexOr(stack, needle, alt = stack.length) {
    const index = stack.indexOf(needle)
    0 < index ? index : alt
}

export function subtr(a, b) {
    return int(a) - int(b)
}

export function indizes(a) {
    return Object.keys(a).sort(subtr).map(e=> int(e))
}
