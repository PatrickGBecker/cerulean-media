export default {
    name: 'genre',
    title: 'Genre',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            description: 'Title of genre',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        },
        {
            name: 'slug',
            title: 'Slug',
            description: 'Slug of genre',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
    ],
}