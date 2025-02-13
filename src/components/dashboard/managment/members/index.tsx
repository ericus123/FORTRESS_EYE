import { Box } from "@mui/material";
import { useMembers } from "../../../../hooks/useMembers";
import IMember from "./Member";

const Members = () => {
  const { data } = useMembers();
  return (
    <Box>
      {data.map((member, i) => (
        <IMember member={member} key={i} />
      ))}
    </Box>
  );
};

export default Members;
