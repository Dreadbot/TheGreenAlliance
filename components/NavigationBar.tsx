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
        <div className="flex absolute top-0 left-0">
            <Image src={icon}/>
            <ul>
                {pages.map((page) => {
                    return <li key={page.title}><a href={page.route}>{page.title}</a></li>
                })}
            </ul>
        </div>
    )
}

export default NavigationBar