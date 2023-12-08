import { Box } from "@mui/material";
import { colors } from "../../constants/colors";
import Greetings from "./greetings";
import DashboardSidebar from "./sidebar";
import Weather from "./weather";

const Dashboard = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        gap: "2rem"
      }}>
      <DashboardSidebar />
      <Box
        sx={{
          width: "calc(100% - 100px)",
          display: "flex",
          overflow: "scroll",
          gap: "2rem"
        }}>
        <Box
          sx={{
            width: "350px",
            background: colors.black_5,
            minWidth: "350px",
            minHeight: "900px"
          }}></Box>
        <Box
          sx={{
            minWidth: "1000px",
            minHeight: "900px",
            width: "100%",
            overflow: "scroll",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
            paddingRight: "2rem",
            paddingTop: "1rem",
            paddingBottom: "1rem"
          }}>
          <Box
            sx={{
              width: "100%",
              height: "600px",
              display: "flex",
              gap: "2.5rem"
            }}>
            <Box
              sx={{
                width: "350px",
                display: "flex",
                flexDirection: "column",
                gap: "25px"
              }}>
              <Greetings />

              <Box
                sx={{
                  background: colors.black_5,
                  height: "100%"
                }}></Box>
            </Box>
            <Box
              sx={{
                width: "calc(100% - 350px)",
                background: "black"
              }}></Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "300px",
              display: "grid",
              gridTemplateColumns: "auto 300px",
              gap: "2rem"
            }}>
            <Box
              sx={{
                background: colors.black_5,
                borderRadius: "15px"
              }}></Box>
            <Weather />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
