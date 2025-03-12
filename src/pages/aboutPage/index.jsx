import { Typography, Box, Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMatchData } from "../../react-redux/slice/demoSlice";
import GridViewComponents from "../../components/cards/gridView";
import TableViewComponent from "../../components/cards/TableView";
import CustomModal from '../../components/modals/index'
const Index = (gridView = false) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.demoSlice.demoData);
  const isGridView = useSelector((state) => state.gridSlice.isGridView);
  const [selectedItem, setSelectedItem] = useState(null);

  const itemsPerPage = 6;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getMatchData());
  }, [dispatch]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const pagesData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box sx={{ flexGrow: 1, p: 2, }} sm={{ flexGrow: 2 }} >
      {isGridView ? (
        <>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Card View
          </Typography>

          <Grid container spacing={2}>
            {pagesData?.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                sx={{ justifyItems: "center" }}
                key={index}
              >
<GridViewComponents data={item} onClick={() => handleOpenModal(item)} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Table View
          </Typography>
          <Grid>
          {pagesData?.map((item, index) => (
              <Grid
              item
             width={'full'}
              sx={{ justifyItems: "center" }}
              key={index}
            >
<TableViewComponent item={item} onClick={() => handleOpenModal(item)} />
</Grid>
          ))}
          </Grid>
        </>
      )}
      
      {data.length > itemsPerPage && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      )}
<CustomModal open={!!selectedItem} onClose={handleCloseModal} data={selectedItem} />

    </Box>
  );
};

export default Index;
