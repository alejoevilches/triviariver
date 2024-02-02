import './Navbar.css'
import { IconBrandFacebook, IconBrandInstagram, IconBrandTiktok, IconBrandTwitter, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react'

export function Navbar () {
  return (
    <nav>
      <img className='nav_logo' src='https://riveridstorage.blob.core.windows.net/appcarpblob/RiverID_Nuevo.svg' alt='River ID Logo' style={{ width: '180px' }} />
      <div className='social-container'>
        <IconBrandFacebook color='white' />
        <IconBrandInstagram color='white' />
        <IconBrandTiktok color='white' />
        <IconBrandTwitter color='white' />
        <IconBrandLinkedin color='white' />
        <IconBrandYoutube color='white' />
      </div>
    </nav>
  )
}
