import { Box } from "@mui/material";
import MembersHeader from "./Header";
import MemberCard from "./card";
import { members } from "./card/members";

const MembersView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        position: "relative",
        width: "calc(350px - 4rem)",
        borderRadius: "15px",
        height: "350px",
        marginTop: "calc(100vh - 470px)",
        overflow: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}>
      <MembersHeader />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          maxHeight: "300px",
          overflow: "scroll",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        }}>
        {members?.map((member, i) => (
          <MemberCard {...member} key={i} />
        ))}
      </Box>
    </Box>
  );
};

export default MembersView;
