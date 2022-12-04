import * as React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import ApartmentIcon from '@mui/icons-material/Apartment'
import AutoStoriesIcon from '@mui/icons-material/AutoStories'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import { Paper } from '@mui/material'

interface IProps {
  tab: number
  onChangeTab: (tab: number) => void
}

const BottomNav: React.FC<IProps> = ({ tab, onChangeTab }) => {
  return (
    <Paper
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={tab}
        onChange={(event, newValue) => {
          onChangeTab(newValue)
        }}
      >
        <BottomNavigationAction label='General' icon={<ApartmentIcon />} />
        <BottomNavigationAction label='Planos' icon={<AutoStoriesIcon />} />
        <BottomNavigationAction label='Contactos' icon={<ContactPhoneIcon />} />
      </BottomNavigation>
    </Paper>
  )
}

export default BottomNav
