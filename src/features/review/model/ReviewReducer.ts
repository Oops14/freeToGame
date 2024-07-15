import { v4 as uuidv4 } from 'uuid'

const ADD_REVIEW = 'APP/ADD_REVIEW'

const initialReviewState = {
    reviews: {
        [540]: [
            {
                id: uuidv4(),
                userName: 'Guest',
                comment:
                    'I’ve heard the argument that “lorem ipsum” is effective in wireframing or design because it helps people focus on the actual layout, or color scheme, or whatever. The entire structure of the page or app flow is FOR THE WORDS.',
            },
            {
                id: uuidv4(),
                userName: 'Guest',
                comment:
                    'I’ve heard the argument that “lorem ipsum” is effective in wireframing or design because it helps people focus on the actual layout, or color scheme, or whatever. The entire structure of the page or app flow is FOR THE WORDS.',
            },
        ],
    },
}

export const reviewReducer = (state: InitialReviewState = initialReviewState, action: ReviewActions) => {
    switch (action.type) {
        case ADD_REVIEW: {
            const existingReviews = state.reviews[action.productId]

            return { ...state, reviews: { ...state.reviews, [action.productId]: [...existingReviews, action.review] } }
        }
        default: {
            return state
        }
    }
}

type ReviewActions = ReturnType<typeof addReviewAC>

export type InitialReviewState = {
    [key: number]: ReviewItem[]
}

export type ReviewItem = {
    id?: string
    userName: string
    comment: string
}

export const addReviewAC = (review: ReviewItem, productId: number) => ({ type: ADD_REVIEW, review, productId }) as const
