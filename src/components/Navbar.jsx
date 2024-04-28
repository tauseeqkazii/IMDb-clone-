import NavbarItem from './NavbarItem'

export default function Navbar() {
  return (
    <div className="flex justify-center text-black bg-white lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}

// import NavbarItem from './NavbarItem'
// import { useTheme } from 'next-themes'
// import { useEffect, useState } from 'react'

// export default function Navbar() {
//   const { systemTheme, theme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => setMounted(true), [])

//   const currentTheme = theme === 'system' ? systemTheme : theme

//   return (
//     <div className={`flex justify-center text-black ${currentTheme === 'light' ? 'bg-black' : 'bg-white'} lg:text-lg p-4`}>
//       <NavbarItem title="Trending" param="fetchTrending" />
//       <NavbarItem title="Top Rated" param="fetchTopRated" />
//     </div>
//   )
// }
