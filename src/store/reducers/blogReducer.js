const initState = {
    posts: [
        {id : '1', title: 'post 1', content: 'content 1'},
        {id : '2', title: 'post 2', content: 'content 2'},
        {id : '3', title: 'post 3', content: 'content 3'},
    ]
}

const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post)
    }
    return state
}

export default blogReducer