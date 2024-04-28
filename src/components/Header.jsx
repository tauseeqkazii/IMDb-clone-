import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5 hover:shadow-golden">
        <DarkModeSwitch />
        <Link href="/">
          <h2 className="text-2xl relative">
            <span className="font-bold  py-1 px-2 rounded-lg mr-1 bg-white text-black hover:shadow-golden">
              CinemaCircle
            </span>
            {/* <span className="text-xl hidden sm:inline">Mingle</span> */}
          </h2>
        </Link>
      </div>
    </div>
  )
}
