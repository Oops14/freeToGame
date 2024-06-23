import { useFormik } from 'formik'
import { Footer } from '../../../common/components/footer/Footer'
import { Header } from '../../../common/components/header/Header'
import style from './login.module.scss'

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors = {}

            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length <= 6) {
                errors.password = 'The minimum length of the password is 6'
            }

            return errors
        },
        onSubmit: (values, formikHelpers) => {
            console.log(`Email: ${values.email}`)
            console.log(`Password: ${values.password}`)


            formikHelpers.setSubmitting(false)
            formik.resetForm()
        },
    })

    return (
        <>
            <Header />
            <div className={style.login_page}>
                <div className={'container ' + style.login_container}>
                    <div className={style.login_form}>
                        <h4>Sign In</h4>

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
                                <button type="button" className="btn">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
