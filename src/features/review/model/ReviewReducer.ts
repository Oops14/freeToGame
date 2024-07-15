const ADD_REVIEW = 'APP/ADD_REVIEW'

const initialReviewState = {
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

export const reviewReducer = (state: InitialReviewState = initialReviewState, action: ReviewActions) => {
    switch (action.type) {
        case ADD_REVIEW: {
            return { ...state, reviews: [...state.reviews, action.review] }
        }
        default: {
            return state
        }
    }
}

type ReviewActions = ReturnType<typeof addReviewAC>

type InitialReviewState = {
    reviews: ReviewItem[]
}

export type ReviewItem = {
    userName: string
    comment: string
}

const addReviewAC = (review: ReviewItem) => ({ type: ADD_REVIEW, review }) as const
