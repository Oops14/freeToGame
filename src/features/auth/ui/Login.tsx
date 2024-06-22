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
                        <form>
                            <input className="input_text" type="text" />
                            <input className="input_password" type="password" />
                            <div className={style.buttons_block}>
                                <button className="btn">Sing In</button>
                                <button className="btn">Sing Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
