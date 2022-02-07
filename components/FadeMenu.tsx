import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode | undefined
  title1: string
  title2: string
  title3?: string
}

export default function FadeMenu({children,title1,title2,title3}:Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log("rendered FadeMenu")
  return (
    <>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='inherit'
        size='large'
        >
        {children}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>{title1}</MenuItem>
        <MenuItem onClick={handleClose}>{title2}</MenuItem>
        <MenuItem onClick={handleClose}>{title3}</MenuItem>
      </Menu>
    </>
  );
}