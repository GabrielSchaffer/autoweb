import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Cabeçalho() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4} sx={{ backgroundColor: "red" }}>
            <Typography variant="h6">AutoWeb</Typography>
          </Grid>

          <Boy>
          <Typography variant="h6">AutoWeb</Typography>
          </Boy>


        </Grid>
      </Box>
    </>
  );
}
