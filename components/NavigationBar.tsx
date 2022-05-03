import Image from "next/image"
import styles from "../styles/NavBar.module.scss"

type NavigationBarProps = {
    icon: string,
    pages: {
        title: string,
        route: string
    }[]
}

const NavigationBar = ({ icon, pages }: NavigationBarProps) => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.icon}><Image src={icon} width="50px" height="50px"/></li>
                {pages.map((page) => {
                    return (
                        <li key={page.title} className={styles.route}>
                            <a href={page.route}>{page.title}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default NavigationBar

export const NavigationConstant = () => {
    return(
      <NavigationBar icon={require("../public/eye.svg")} 
              pages={[
                {title: "Home", route: "/"},
                {title: "About", route: "/about"},
      ]}/>
    )
}