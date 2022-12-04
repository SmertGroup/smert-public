import { Box } from '@mui/material'
import { useMemo } from 'react'
import { IStructureData } from '../../../interfaces'
import DataList from './DataList'
import InfoCard from './InfoCard'
import GppBadIcon from '@mui/icons-material/GppBad'
import GppGoodIcon from '@mui/icons-material/GppGood'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CancelIcon from '@mui/icons-material/Cancel'

const StructureInfo = ({ structure }: { structure: IStructureData }) => {
  const floorsName = structure.settings.floor_plural || 'Plantas'

  const structureListData = useMemo(() => {
    if (!structure) return []
    return [
      {
        title: 'Red Seca',
        render: structure.opcionRedSeca && (
          <Box display='flex' alignItems='center'>
            {structure.opcionRedSeca == 'No posee' ? (
              <GppBadIcon color='error' sx={{ mr: 1 }} />
            ) : (
              <GppGoodIcon color='success' sx={{ mr: 1 }} />
            )}
            {structure.opcionRedSeca}
          </Box>
        )
      },
      {
        title: 'Red Húmeda',
        render: structure.opcionRedHumeda && (
          <Box display='flex' alignItems='center'>
            {structure.opcionRedHumeda == 'No posee' ? (
              <GppBadIcon color='error' sx={{ mr: 1 }} />
            ) : (
              <GppGoodIcon color='success' sx={{ mr: 1 }} />
            )}
            {structure.opcionRedHumeda}
          </Box>
        )
      },
      {
        title: 'Red Inerte',
        render: structure.opcionRedInerte && (
          <Box display='flex' alignItems='center'>
            {structure.opcionRedInerte == 'No posee' ? (
              <CancelIcon color='error' sx={{ mr: 1 }} />
            ) : (
              <GppGoodIcon color='success' sx={{ mr: 1 }} />
            )}
            {structure.opcionRedInerte}
          </Box>
        )
      },
      {
        title: `N° ${floorsName}`,
        render: structure.numeroPisos && <Box>{structure.numeroPisos}</Box>
      },
      {
        title: 'Piscina',
        render: (
          <Box>
            {structure.piscina ? (
              <CheckCircleIcon color='success' />
            ) : (
              <CancelIcon color='error' />
            )}
          </Box>
        )
      },
      {
        title: 'Estacionamiento',
        render: structure.estacionamiento && (
          <Box>
            {structure.estacionamiento ? (
              <CancelIcon color='error' />
            ) : (
              <CheckCircleIcon color='success' />
            )}
          </Box>
        )
      },
      {
        title: 'Comentarios',
        render: structure.comentarios && (
          <Box>
            {structure.comentarios ? <p>{structure.comentarios}</p> : '-'}
          </Box>
        )
      }
    ]
  }, [structure])

  return (
    <>
      <InfoCard
        title={structure.nombre}
        description={`${structure.calle} ${structure.numero}`}
      />
      <DataList data={structureListData} />
    </>
  )
}

export default StructureInfo
