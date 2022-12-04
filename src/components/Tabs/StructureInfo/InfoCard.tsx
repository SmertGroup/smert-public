import { FC } from 'react'
import { Card as BasicCard, CardContent, Typography } from '@mui/material'

interface ICardProps {
  title: string
  description: string
}
const InfoCard: FC<ICardProps> = ({ title, description }) => {
  return (
    <BasicCard sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography fontSize={18} fontWeight='bold' gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
    </BasicCard>
  )
}

export default InfoCard
