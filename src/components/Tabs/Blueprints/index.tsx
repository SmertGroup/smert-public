import { Box, Paper, Typography } from '@mui/material'
import { IStructureData } from '../../../interfaces'
import PDFIcon from '@mui/icons-material/PictureAsPdf'

const Blueprints = ({ structure }: { structure: IStructureData }) => {
  const isNumber = (value: string) => value && !isNaN(Number(value))
  const floorName = structure.settings.floor_singular || 'Planta'
  const openBlueprint = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <>
      <Box display='flex' justifyContent='space-around' flexWrap='wrap'>
        {structure.pisos.map((piso, i) => (
          <Box
            component={Paper}
            onClick={() => openBlueprint(piso.plano)}
            sx={{
              width: 120,
              height: 120,
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              m: 1,
              fontSize: 12,
              fontWeight: 'bold',
              background: 'white',
              textAlign: 'center',
              wordBreak: 'break-word'
            }}
            key={i}
          >
            <Typography fontWeight='bold' variant='h6' fontSize={13}>
              {piso.alias
                ? piso.alias
                : isNumber(piso.nombre)
                ? `${floorName} ${piso.nombre}`
                : piso.nombre}
            </Typography>
            <PDFIcon
              sx={{ position: 'absolute', fontSize: 80, opacity: 0.08 }}
            />
          </Box>
        ))}
      </Box>
    </>
  )
}

export default Blueprints
