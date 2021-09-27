export default {
    name:'link',
    title:'Link',
    type:'object',
    fields: [
        {
            name:'metadata',
            title:'Metadata',
            type:'urlWithMetadata',
        }
    ],
    preview: {
        select: {
            title:'metadata.openGraph.title', // opengraph.title데이터를 가져옴
            subtitle:'metadata.openGraph.url',
        }
    }
}