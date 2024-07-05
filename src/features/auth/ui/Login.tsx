import CircularProgress from '@mui/material/CircularProgress'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppRootStateType, useAppDispatch } from '../../../app/store'
import { Footer } from '../../../common/components/footer/Footer'
import { Header } from '../../../common/components/header/Header'
import { logIn } from '../model/authReducer'
import style from './login.module.scss'

export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const isLoggedIn = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)
    const isInitializedUser = useSelector<AppRootStateType, boolean>((state) => state.app.isInitializedUser)

    type FormicErrors = {
        email: string
        password: string
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            // @ts-ignore
            const errors: FormicErrors = {}

            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length <= 3) {
                errors.password = 'The minimum length of the password is 3'
            }

            return errors
        },
        onSubmit: async (values, formikHelpers) => {
            try {
                await dispatch(logIn({ email: values.email, password: values.password }))
                formikHelpers.setSubmitting(false)
            } catch (error) {
                console.error('Failed to log in:', error)
                formikHelpers.setSubmitting(false)
            }
        },
    })

    // useEffect(() => {
    //     dispatch(isInitializedTC())
    // }, [])

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/freeToGame/')
        }
    }, [isLoggedIn, navigate])

    if (isInitializedUser) {
        return (
            <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
                <CircularProgress />
            </div>
        )
    }

    return (
        <>
            <Header />
            <div className={style.login_page}>
                <div className={'container ' + style.login_container}>
                    <div className={style.login_form}>
                        <h4>Sign In</h4>
                        <p style={{marginBottom: '0'}}>Test account credentials:</p>
                        <p style={{marginBottom: '0'}}>Email: free@samuraijs.com</p>
                        <p>Password: free</p>


                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <input
                                    className="input_text"
                                    type="email"
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <div className="error">{formik.errors.email}</div>
                                )}
                            </div>
                            <div>
                                <input
                                    className="input_password"
                                    type="password"
                                    name="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                />
                                {formik.errors.password && formik.touched.password && (
                                    <div className="error">{formik.errors.password}</div>
                                )}
                            </div>
                            <div className={style.buttons_block}>
                                <button type="submit" className="btn" disabled={formik.isSubmitting}>
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    )
}
