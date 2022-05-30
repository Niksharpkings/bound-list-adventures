import PostMessage from '../models/postMessage.js';

export const getPosts =  async (req, res) => { res.send('This is the posts page');
try {
    const postMessage = await PostMessage.find();
    console.log(postMessage);

    res.status(200).json(postMessage);
} catch (error) {
    res.status(404).json({ message: error.message });
    
} };


export const createPost = (req, res) => { res.send('This is the create post page'); 
};
