import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function CustomPagination({ page }) {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" page={page} />
    </Stack>
  );
}