export default {
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'url',
            title: 'Url',
            type: 'url',
        },
        {
            name: "genre",
            title: "Genre",
            type: "array",
            of: [{ type: "reference", to: { type: "genre" } }],
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
    ],
}
