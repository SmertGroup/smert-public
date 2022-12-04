import React from 'react'
import Grid from '@mui/material/Unstable_Grid2' // Grid version 2
import { useQuery } from 'react-query'
import { getStructureData } from '../../services/structureApi'
import BottomNav from '../../components/BottomNav'
import { useRouter } from 'next/router'
import { useSnackbar } from 'material-ui-snackbar-provider'
import StructureInfo from '../../components/Tabs/StructureInfo'
import Blueprints from '../../components/Tabs/Blueprints'
import Contacts from '../../components/Tabs/Contacts'
import Loading from '../../components/Loading'

function Structure() {
  const [tab, setTab] = React.useState(0)
  const { query, replace } = useRouter()
  const snackbar = useSnackbar()
  const { data, isLoading, isFetching, error } = useQuery(
    'structure',
    () => getStructureData(query.structureId as string, query.token as string),
    {
      enabled: !!query.structureId && !!query.token,
      retry: false,
      onError: (error: any) => {
        if (error.response.status === 401 || error.response.status === 403) {
          snackbar.showMessage('No autorizado')
          replace(`/?structureId=${query.structureId}`)
        }
      }
    }
  )

  if (error) return <div>No esta autorizado</div>

  if (!data || isLoading || isFetching) return <Loading />

  return (
    <Grid direction='column' container m={4} gap={4}>
      {tab === 0 && <StructureInfo structure={data} />}
      {tab === 1 && <Blueprints structure={data} />}
      {tab === 2 && <Contacts structure={data} />}
      <BottomNav tab={tab} onChangeTab={setTab} />
    </Grid>
  )
}

export default Structure
