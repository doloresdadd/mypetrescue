import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';

export const metadata = {
    title: 'My Pet Rescue | Adopt don&apos;t shop',
    description: "Adopt don&apos;t shop",
    keywords: 'adopt, pet, cat, rescue, dog, save, animal'
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Navbar />
        <main>{children}</main>
        </body>
    </html>
  )
}

export default MainLayout