import { CircularProgress } from '@mui/material'

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <CircularProgress color='secondary' size={40} />
    </div>
  )
}
