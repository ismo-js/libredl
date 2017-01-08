dl => dump-single-json

class Loc {
    type: audio|image|text|video
    pcol: Pcol
    user: String
    passwd: String
    host: [String]
    path: String
    query: [String]
    frag: String
}

class Val {
    scal: Number
    type: Type
}

class Content extends Entity {
    doers: [Person]
    licenses: [License]
    geos: [Geo]
    reach: Number
    size: [Pixel_, Pixel_]|Char_
    t: Number
    alt: [Entity]
    super: Multipart
}

class Audio {

}

class Image {

}

class Multipart {
    subs: [Entity]
}

dl({
    general: => {
        title,
        title2,
    },
    audio: =>,
    image: =>,
    multipart: => {
        items: {
        },

    },
    text: => ,
    video: =>,
})
