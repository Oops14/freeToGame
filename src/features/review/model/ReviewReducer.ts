const ADD_REVIEW = 'APP/ADD_REVIEW'

const initialReviewState = {
    reviews: {
        [540]: [
            {
                id: 540,
                userName: 'Guest',
                comment:
                    'I’ve heard the argument that “lorem ipsum” is effective in wireframing or design because it helps people focus on the actual layout, or color scheme, or whatever. The entire structure of the page or app flow is FOR THE WORDS.',
            },
            {
                id: 540,
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
            // return { ...state, reviews: {} }
            return state
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
    userName: string
    comment: string
}

const addReviewAC = (review: ReviewItem) => ({ type: ADD_REVIEW, review }) as const
