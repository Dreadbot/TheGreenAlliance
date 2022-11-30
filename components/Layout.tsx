import { NavigationConstant } from "./NavigationBar";

export default function Layout({ children }: any) {
    return (
        <>
            <NavigationConstant/>
            <main>{ children }</main>
        </>
    );
}
