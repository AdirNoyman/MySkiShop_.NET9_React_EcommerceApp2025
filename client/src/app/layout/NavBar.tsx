import { AppBar, Toolbar, Typography } from "@mui/material"
import DarkModeSwitch from "../components/DarkModeSwitch"

type Props={

  switchDarkMode:()=>void
}

const NavBar = ({switchDarkMode} : Props) => {
  return (
    <AppBar position="fixed">
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="h6">MySkiShop</Typography>
            <DarkModeSwitch onClick={() => switchDarkMode()}/>
        </Toolbar>
    </AppBar>
  )
}

export default NavBar
