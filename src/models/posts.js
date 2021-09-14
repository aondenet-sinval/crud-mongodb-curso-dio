import MongoosePosts from 'mongoose'


const schemaPost = new MongoosePosts.Schema({
    title: String,
    content: String,
    author: String,
    publishDate: {
    type: Date,
    default: Date.now},
}, { collection: 'posts', versionKey: false}
)

const PostModel = MongoosePosts.model('Posts', schemaPost)

export default PostModel