import Link from "next/link"
import { baskerville_bold } from "../ui/font"

const NavButton = ({ text, link }: any) => {
  return (
    <Link href={`${link}`}>
    <div className="m-1 rounded-md p-4 bg-slate-100 hover:bg-sky-100 hover:text-sky-800">
      {text}
    </div>
    </Link>
  )
}

export function SideNav()
{
  return (
    <div className="h-screen flex flex-col p-1">
      <Link href="/">
        <div className="rounded-md m-1 bg-sky-200">
          <div className = {`${baskerville_bold.className} text-center p-10 text-lg text-sky-800`}>Personal Finance</div>
        </div>
      </Link>
      <NavButton text="Dashboard" link="dashboard" />
      <div className="flex-grow rounded-md m-1 bg-slate-100" />
      <NavButton text="Sign Out" />
    </div>
  )
}