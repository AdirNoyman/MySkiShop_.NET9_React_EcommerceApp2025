import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import DarkModeSwitch from '../components/DarkModeSwitch';
import { NavLink } from 'react-router';
import { ShoppingCart } from '@mui/icons-material';

const middleLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'contact', path: '/contact' },
  { title: 'about', path: '/about' },
];

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
];

const navStyles = {
  color: 'inherit',
  typography: 'h6',
  textDecoration: 'none',
  '&:hover': { color: 'grey.500' },
  '&.active': { color: '#baecf9' },
};

type Props = {
  switchDarkMode: () => void;
};

const NavBar = ({ switchDarkMode }: Props) => {
  return (
    <AppBar position="fixed" >
      <Toolbar
        sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography
          component={NavLink}
          to="/"
          variant="h6"
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          MySkiShop
        </Typography>
        <DarkModeSwitch onClick={() => switchDarkMode()} />
        </Box>
        
        <List sx={{ display: 'flex' }}>
          {middleLinks.map(({ title, path }) => (
            <ListItem
              key={path}
              component={NavLink}
              to={path}
              sx={navStyles}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton size="large" sx={{ color: 'inherit' }}>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <List sx={{ display: 'flex' }}>
          {rightLinks.map(({ title, path }) => (
            <ListItem
              key={path}
              component={NavLink}
              to={path}
              sx={navStyles}
            >
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
