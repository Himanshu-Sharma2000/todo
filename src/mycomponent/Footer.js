import React from 'react'

export default function Footer() {
  let footerStyle={
    
    borderRadius:"20px"
  }
  return (
    <footer className='bg-dark text-light p-1' style={footerStyle}>
     
      <p className='text-center'> Copyright &copy; Mytodolist.com</p>
    </footer>
  )
}
