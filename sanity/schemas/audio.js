export default {
    name: 'audio',
    title: 'Audio',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'url',
            title: 'Url',
            type: 'url',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
        },
        {
            name: 'isFavorite',
            title: '⭐ Favorite',
            type: 'boolean',
            description: 'Set as the default featured album in the audio carousel',
            initialValue: false,
        },
    ],
}
