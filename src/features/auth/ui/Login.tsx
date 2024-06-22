import { Formik } from 'formik'
import { Footer } from '../../../common/components/footer/Footer'
import { Header } from '../../../common/components/header/Header'
import style from './login.module.scss'

export const Login = () => {
    return (
        <>
            <Header />
            <div className={style.login_page}>
                <div className={'container ' + style.login_container}>
                    <div className={style.login_form}>
                        <h4>Sing In</h4>

                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validate={(values) => {
                                const errors = {
                                    email: '',
                                    password: '',
                                }

                                if (!values.email) {
                                    errors.email = 'Required'
                                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                    errors.email = 'Invalid email address'
                                }

                                if (!values.password) {
                                    errors.password = 'Required'
                                } else if (values.password.length <= 6) {
                                    errors.password = 'The minimum lenght of the password is 6'
                                }

                                return errors
                            }}
                            onSubmit={(values) => {
                                console.log(values)
                            }}>
                            {({ values, handleSubmit, errors, touched, handleChange, handleBlur, isSubmitting }) => (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            className="input_text"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {errors.email && touched.email && <div className="error">{errors.email}</div>}
                                    </div>
                                    <div>
                                        <input
                                            className="input_password"
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        {errors.password && touched.password && (
                                            <div className="error">{errors.password}</div>
                                        )}
                                    </div>
                                    <div className={style.buttons_block}>
                                        <button type="submit" className="btn" disabled={isSubmitting}>
                                            Sign In
                                        </button>
                                        <button type="button" className="btn">
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
