import React, { useMemo } from "react";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useQuery } from "react-query";
import { getStructureData } from "../services/StructureApi";
import BottomNav from "../components/BottomNav";
import { Box } from "@mui/material";
import DataList from "../components/DataList";
import BasicCard from "../components/Card";

import GppGoodIcon from "@mui/icons-material/GppGood";
import GppBadIcon from "@mui/icons-material/GppBad";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

function Structure() {
  const { data, isLoading, isFetching } = useQuery(
    "structure",
    getStructureData
  );

  const structureListData = useMemo(() => {
    if (!data) return [];
    return [
      {
        title: "Red Seca",
        render: data.opcionRedSeca && (
          <Box display="flex" alignItems="center">
            {data.opcionRedSeca == "No tiene" ? (
              <GppBadIcon color="error" />
            ) : (
              <GppGoodIcon color="success" />
            )}
            {data.opcionRedSeca}
          </Box>
        ),
      },
      {
        title: "Red Húmeda",
        render: data.opcionRedHumeda && (
          <Box display="flex" alignItems="center">
            {data.opcionRedHumeda == "No tiene" ? (
              <GppBadIcon color="error" />
            ) : (
              <GppGoodIcon color="success" />
            )}
            {data.opcionRedHumeda}
          </Box>
        ),
      },
      {
        title: "Red Inerte",
        render: data.opcionRedInerte && (
          <Box display="flex" alignItems="center">
            {data.opcionRedInerte == "No tiene" ? (
              <CancelIcon color="error" />
            ) : (
              <GppGoodIcon color="success" />
            )}
            {data.opcionRedInerte}
          </Box>
        ),
      },
      {
        title: "N° Plantas",
        render: data.numeroPisos && <Box>{data.numeroPisos}</Box>,
      },
      {
        title: "Piscina",
        render: (
          <Box>
            {data.piscina ? (
              <CheckCircleIcon color="success" />
            ) : (
              <CancelIcon color="error" />
            )}
          </Box>
        ),
      },
      {
        title: "Estacionamiento",
        render: data.estacionamiento && (
          <Box>
            {data.estacionamiento ? (
              <CancelIcon color="error" />
            ) : (
              <CheckCircleIcon color="success" />
            )}
          </Box>
        ),
      },
      {
        title: "Comentarios",
        render: data.comentarios && (
          <Box>{data.comentarios ? <p>{data.comentarios}</p> : "-"}</Box>
        ),
      },
    ];
  }, [data]);

  return (
    <Grid direction="column" container m={4} gap={4}>
      <BasicCard title="Titulo" description="Descripcion" />
      {data && <DataList data={structureListData} />}
      <BottomNav />
    </Grid>
  );
}

export default Structure;
