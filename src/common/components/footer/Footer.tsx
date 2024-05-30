import style from './footer.module.scss'
import logo from '../../../assets/logo/1.svg'

export const Footer = () => {
    return (
        <section className={style.footer_general}>
            <div className="container">
                <div className={style.footer_inner}>
                    <div className={style.footer_top}>
                        <div>
                            <img src={logo} alt={'#'} />
                        </div>
                        <div className={style.language_switch}>
                            <select name="select" className={style.select_curr}>
                                <option selected value="value1">
                                    United States (English) / USD
                                </option>
                                <option value="value2">Europian Union / EUR</option>
                                <option value="value3">Canada / CAD</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.footer_bottom}>
                        <div className={style.creators}>Based on WoodMart theme 2024 WooCommerce Themes.</div>
                        <div className={style.terms}>
                            <ul className={style.terms_menu}>
                                <li>Terms Of Service</li>
                                <li>Privacy Policy</li>
                                <li>Store Refund Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
