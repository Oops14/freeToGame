const ADD_REVIEW = 'APP/ADD_REVIEW'

const initialPostState = {
    reviews: [
        {
            userName: 'Guest',
            comment:
                'I’ve heard the argument that “lorem ipsum” is effective in wireframing or design because it helps people focus on the actual layout, or color scheme, or whatever. The entire structure of the page or app flow' +
                'is FOR THE WORDS.',
        },
        {
            userName: 'Guest',
            comment:
                'I’ve heard the argument that “lorem ipsum” is effective in wireframing or design because it helps people focus on the actual layout, or color scheme, or whatever. The entire structure of the page or app flow' +
                'is FOR THE WORDS.',
        },
    ],
}

export const reviewReducer = (state = initialPostState, action: ReviewActions) => {
    switch (action.type) {
        case ADD_REVIEW: {
            return state
        }
        default: {
            return state
        }
    }
}

type ReviewActions = any
export type ReviewItem = {
    userName: string
    comment: string
}
