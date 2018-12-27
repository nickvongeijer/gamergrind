export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('posts').add({
          ...post,
          authId: 12345,
        }).then(() => {
        dispatch({ type: 'CREATE_POST', post })
      }).catch((err) => {
        dispatch({ type: 'CREATE_POST_ERROR', err })
      })
    }
}
