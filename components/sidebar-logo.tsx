import { useTheme } from "next-themes";
import Image from "next/image"

export const SideBarLogo=()=>
{
    const { theme } = useTheme();
return <Image width={35} alt="" className="w-20 min-h-fit"
height={35} src={theme === 'dark' || theme === 'custom' ? '/logo.svg' : '/logo.svg'}/>
}