import { useState, MouseEvent, TouchEvent, useRef } from 'react'
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import Link from 'next/link'
import EasterEgg from './easter-egg'

const pages = [
  { title: 'Buzzer', href: '/' },
  { title: 'Head 2 Head', href: '/head-to-head' },
  { title: 'Group Buzzers', href: '/group' },
]
const title = 'Buzzy McBuzzer'

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const logoTouchTime = useRef(0)
  const logoTouchTimeInterval = useRef<number>()
  const [showEasterEgg, setShowEasterEgg] = useState(false)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const clearUpEasterEgg = () => {
    setShowEasterEgg(false)
    if (logoTouchTimeInterval.current) {
      window.clearInterval(logoTouchTimeInterval.current)
    }
  }

  const onLogoTouchStart = (e: TouchEvent) => {
    e.preventDefault()
    const intervalId = window.setInterval(() => {
      if (logoTouchTime.current < 4) {
        logoTouchTime.current = logoTouchTime.current + 1
      } else {
        setShowEasterEgg(true)
        setTimeout(() => {
          clearUpEasterEgg()
        }, 5000)
      }
    }, 1000)
    logoTouchTimeInterval.current = intervalId
  }

  const onLogoTouchEnd = (e: TouchEvent) => {
    e.preventDefault()
    clearUpEasterEgg
  }

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <GraphicEqIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.href}
                  component={Link}
                  href={page.href}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <GraphicEqIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            onTouchStart={onLogoTouchStart}
            onTouchEnd={onLogoTouchEnd}
          />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontSize: { xs: '0.8rem', sm: '1.25rem' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.href}
                onClick={handleCloseNavMenu}
                component={Link}
                href={page.href}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
      {showEasterEgg && <EasterEgg />}
    </AppBar>
  )
}
export default ResponsiveAppBar
