import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SortIcon from "@mui/icons-material/Sort";
import { Link } from 'react-router-dom';

const options = [
  'Quiénes Somos',
  'Programa prácticas',
];
const optionsTrad = {
  'Quiénes Somos':'About',
  'Programa prácticas':'Internship',
};

const styles = {
  MenuIcon: {
    color: "#fff",
    height: "30px",
    width: "30px",
  },
}

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <SortIcon style={styles.MenuIcon}/>
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            <Link style={{textDecoration:"none",color:"black"}} to={`/${optionsTrad[option]}`}>{option}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
