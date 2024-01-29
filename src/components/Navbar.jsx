import './Navbar.css'
import { IconMenu2 } from '@tabler/icons-react'

export function Navbar () {
  return (
    <nav>
      <img className='nav_logo' src='https://riveridstorage.blob.core.windows.net/appcarpblob/RiverID_Nuevo.svg' alt='River ID Logo' style={{ width: '180px' }} />
      <IconMenu2 color='white' size={36} />
    </nav>
  )
}
