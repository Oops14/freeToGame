import { format } from 'date-fns' // Assuming you're using date-fns for date formatting
import { v4 as uuidv4 } from 'uuid'

const ADD_POST = 'POSTS/ADD_POST'

const initialPostState = {
    posts: [
        {
            id: uuidv4(),
            title: 'Diablo 4 Patch 1.03 Fixes Nightmare Dungeons and the Endgame XP Grind',
            category: 'Blog',
            date: '28 JUN',
            img: '/freeToGame/src/assets/articles/1.jpg',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: uuidv4(),
            title: 'Flower Arrangement Tips & Tricks from Floral Experts',
            category: 'Blog',
            date: '28 JUN',
            img: '/freeToGame/src/assets/articles/1.jpg',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
            id: uuidv4(),
            title: 'Flower Arrangement Tips & Tricks from Floral Experts',
            category: 'Blog',
            date: '28 JUN',
            img: '/freeToGame/src/assets/articles/1.jpg',
            content:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
    ],
}

export const postReducer = (state = initialPostState, action: PostActions) => {
    switch (action.type) {
        case ADD_POST: {
            const currentDate = format(new Date(), 'dd MMM').toUpperCase()

            return { ...state, posts: [{ ...action.post, date: currentDate }, ...state.posts] }
        }
        default: {
            return state
        }
    }
}

export type Post = {
    id: string
    title: string
    category: string
    date: string
    content: string
    img: string
    mounth?: string
}

type initialPostState = {
    posts: Post[]
}

type PostActions = ReturnType<typeof addPostAC>
export const addPostAC = (post: Post) => ({ type: ADD_POST, post }) as const
