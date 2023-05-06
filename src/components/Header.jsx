import { Button, Container, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    
        <HStack gap={4} p={8} bgColor={'blackAlpha.900'}>
            <Link to={'/'}>
            <Button variant={'link'}>Home</Button>
            </Link>
            <Link to={'/news'}>
            <Button variant={'link'}>News</Button>
            </Link>
            <Link to={'/headlines'}>
            <Button variant={'link'}>Headlines</Button>
            </Link>
            
        </HStack>
  )
}

export default Header