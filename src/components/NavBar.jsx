import React from 'react'
import CartWidget from './CartWidget'
import { Button, MenuButton, MenuItem, Menu, MenuList } from '@chakra-ui/react'
import LogoNav from './LogoNav'

const NavBar = () => {
  return (  
    
    <div className='navegacion'>
      <LogoNav />  
        <Button colorScheme='blue'>Promociones</Button>
        <Button colorScheme='blue'>Quienes Somos</Button>
        <Button colorScheme='blue'>Contacto</Button>
        <Button colorScheme='blue'>Inicio</Button>
        <Menu>
            <MenuButton as={Button}>Productos</MenuButton>
            <MenuList>
                <MenuItem>BMC</MenuItem>
                <MenuItem>Specialized</MenuItem>
                <MenuItem>Cannyon</MenuItem>
                <MenuItem>Cannondale</MenuItem>
                <MenuItem>Treck</MenuItem>
               
            </MenuList>
        </Menu>
        <CartWidget />
    </div>
   
  )
}

export default NavBar
