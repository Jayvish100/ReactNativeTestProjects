import React, { useContext } from 'react';
import { StyleSheet } from 'react-native'
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {

    const id = navigation.getParam('id')

    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find(
        (blogPost) => blogPost.id === id
    );

    return (
        <BlogPostForm

            initialValues={{ title: blogPost.title, content: blogPost.content }}

            onSubmit={(title, content) => {
                editBlogPost(id, title, content, () => navigation.pop())
            }} />
    )
}

const styles = StyleSheet.create({});

export default EditScreen;



































// import React, { useContext, useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
// import { Context } from '../context/BlogContext';

// const EditScreen = ({ navigation }) => {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     const { addBlogPost } = useContext(Context);

//     return <View>
//         <Text style={styles.label}>Enter New Title</Text>
//         <TextInput 
//         style={styles.input}
//         value={title}
//         onChangeText={(text) => setTitle(text)}
//         />
//         <Text style={styles.label}>Enter New Content</Text>
//         <TextInput 
//         style={styles.input}
//         value={content}
//         onChangeText={(text) => setContent(text)}
//         />
//         <Button 
//         title='Add Blog Post' 
//         onPress={() => addBlogPost(title, content , () => {
//             navigation.navigate('Index')
//         })}
//         /> 
//     </View>
// };

// const styles = StyleSheet.create({
//     input: {
//         fontSize: 18,
//         borderWidth: 1,
//         borderColor: '#000',
//         marginBottom: 15,
//         padding: 5,
//         margin: 5
//     },
//     label: {
//         fontSize: 20,
//         marginBottom: 5,
//         marginLeft: 5
//     }
// });

// export default EditScreen;