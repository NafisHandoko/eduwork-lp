import { createContext, useReducer, useEffect } from 'react'

export const RegisterContext = createContext<any>(undefined)

const initialState = {
    // step 1
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    sourceOfInfo: null,

    // step 2
    name: '',
    domicile: '',
    birthPlace: '',
    birthDate: '',
    gender: null,

    // step 3
    anyExperience: null,
    intensiveEducation: null,
    fieldToDevelop: [],

    // step 4
    skills: [],

    // step 5
    salary: null,
    currentJobStatus: null,
    workReadyDate: '',
    isOnsite: null,
    isRemote: null,
    isFreelance: []
}

export const registerReducer = (state: any, action: any) => {
    switch (action.type) {
        // step 1
        case 'USERNAME':
            return { ...state, username: action.payload }
        case 'EMAIL':
            return { ...state, email: action.payload }
        case 'PASSWORD':
            return { ...state, password: action.payload }
        case 'CONFIRM_PASSWORD':
            return { ...state, confirmPassword: action.payload }
        case 'PHONE_NUMBER':
            return { ...state, phoneNumber: action.payload }
        case 'SOURCE_OF_INFO':
            return { ...state, sourceOfInfo: action.payload }

        // step 2
        case 'NAME':
            return { ...state, name: action.payload }
        case 'DOMICILE':
            return { ...state, domicile: action.payload }
        case 'BIRTH_PLACE':
            return { ...state, birthPlace: action.payload }
        case 'BIRTH_DATE':
            return { ...state, birthDate: action.payload }
        case 'GENDER':
            return { ...state, gender: action.payload }

        // step 3
        case 'ANY_EXPERIENCE':
            return { ...state, anyExperience: action.payload }
        case 'INTENSIVE_EDUCATION':
            return { ...state, intensiveEducation: action.payload }
        case 'FIELD_TO_DEVELOP':
            return { ...state, fieldToDevelop: action.payload }

        // step 4
        case 'SKILLS':
            return { ...state, skills: action.payload }

        // step 5
        case 'SALARY':
            return { ...state, salary: action.payload }
        case 'CURRENT_JOB_STATUS':
            return { ...state, currentJobStatus: action.payload }
        case 'WORK_READY_DATE':
            return { ...state, workReadyDate: action.payload }
        case 'IS_ONSITE':
            return { ...state, isOnsite: action.payload }
        case 'IS_REMOTE':
            return { ...state, isRemote: action.payload }
        case 'IS_FREELANCE':
            return { ...state, isFreelance: action.payload }

        case 'RESET':
            return initialState
        default:
            return state
    }
}

export const RegisterContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(registerReducer, initialState)

    // useEffect(() => {
    //     // const user = JSON.parse(localStorage.getItem('user'))

    //     if (state.user) {
    //         dispatch({ type: 'LOGIN', payload: state.user })
    //     }
    // }, [])

    // console.log('RegisterContext state:', state)
    useEffect(() => {
        if (state.sourceOfInfo) {
            console.log(state.sourceOfInfo)
        }
    }, [state.sourceOfInfo])

    return (
        <RegisterContext.Provider value={{ state, dispatch }}>
            {children}
        </RegisterContext.Provider>
    )

}