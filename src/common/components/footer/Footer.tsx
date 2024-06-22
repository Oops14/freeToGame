import style from './footer.module.scss'
import logo from '../../../assets/logo/1.svg'
import { useState } from 'react'

export const Footer = () => {
    const [selectedOption, setSelectedOption] = useState('1')

    /**
     *
     * Handle option for the language switcher.
     *
     * @param event
     */
    const handleChange = (event: any) => {
        setSelectedOption(event.target.value)
    }

    return (
        <section className={style.footer_general}>
            <div className="container">
                <div className={style.footer_inner}>
                    <div className={style.footer_top}>
                        <div>
                            <img src={logo} alt={'#'} />
                        </div>
                        <div className={style.language_switch}>
                            <select name="select" className={style.select_curr} onChange={handleChange}>
                                <option value="1">United States (English) / USD</option>
                                <option value="2">Europian Union / EUR</option>
                                <option value="3">Canada / CAD</option>
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
