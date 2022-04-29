import Image from "next/image"

type NavigationBarProps = {
    icon: string,
    pages: {
        title: string,
        route: string
    }[]
}

const NavigationBar = ({ icon, pages }: NavigationBarProps) => {
    return (
        <div className="fixed top-0 left-0 w-full">
            <ul className="flex">
                <li className="mx-4"><Image src={icon} width="50px" height="50px"/></li>
                {pages.map((page) => {
                    return (
                        <li key={page.title} className="w-40">
                            <a href={page.route} className="flex h-full w-full justify-center items-center hover:bg-gr-dark transition-colors duration-500">{page.title}</a>
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