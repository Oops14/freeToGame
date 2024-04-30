import style from "./header.module.scss";
import logo from "../../assets/logo/1.svg";
import SearchIcon from "@mui/icons-material/Search";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
    return (
        <>
            <section className={style.main_header}>
                <div className={"container " + style.container}>
                    <div className={style.header_col_left}>
                        <img src={logo} />
                    </div>
                    <div className={style.header_col_center}>
                        <ul className={style.header_menu}>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Games</a>
                            </li>
                        </ul>
                    </div>
                    <div className={style.header_col_right}>
                        <div className={style.social_icons}>
                            <div className={style.icon_item}>
                                <InstagramIcon />
                            </div>
                            <div className={style.icon_item}>
                                <YouTubeIcon />
                            </div>
                        </div>
                        <div className={style.search}>
                            <input type="text" />
                            <div className={style.icon_btn}>
                                <SearchIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={style.mobile_header}>
                <div className={"container " + style.mobile_header_container}>
                    <div className={style.mobile_header_top}>
                        <div>
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className={style.mobile_header_bottom}>
                        <div className={style.burger_menu}>
                            <MenuIcon />
                        </div>
                        <div className={style.search}>
                            <input type="text" />
                            <div className={style.icon_btn}>
                                <SearchIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
