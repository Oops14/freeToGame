export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState: InitialStateType = {
    status: 'idle',
    error: null,
    isInitialized: false,
}

export type InitialStateType = {
    status: RequestStatusType
    error: string | null
    isInitialized: boolean
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return { ...state, status: action.status }
        case 'APP/SET-ERROR':
            return { ...state, error: action.error }
        case 'APP/SET-INITIALIZED':
            return { ...state, isInitialized: action.ini }
        default:
            return state
    }
}

const setLoaderAC = (status: RequestStatusType) => ({type: "APP/SET-STATUS", status} as const);
const setAppErrorAC = (error: string | null) => ({type: "APP/SET-ERROR", error} as const);
const setAppInitializedAC = (ini: boolean) => ({type: "APP/SET-INITIALIZED", ini} as const);

type ActionsType = setLoaderACType | setAppErrorACType | setAppInitializedACType

export type setLoaderACType = ReturnType<typeof setLoaderAC>
export type setAppErrorACType = ReturnType<typeof setAppErrorAC>
export type setAppInitializedACType = ReturnType<typeof setAppInitializedAC>