import { Box } from "@mui/material";
import { useMembers } from "../../../hooks/useMembers";
import { RoleName } from "../verification";
import MembersHeader from "./Header";
import MemberCard from "./card";
import MemberSkeleton from "./skeleton";

const MembersView = ({ role, email }: { role?: RoleName; email: string }) => {
  const { data, fetching } = useMembers();

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
        minHeight: "350px",
        marginTop: "calc(100vh - 400px)",
        overflow: "scroll",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      }}>
      <MembersHeader
        isAuthorized={
          role != undefined &&
          (role === RoleName.SUPER_ADMIN || role === RoleName.ADMIN)
        }
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          maxHeight: "300px",
          minHeight: "200px",
          overflow: "scroll",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        }}>
        {data != undefined &&
          data?.map((member, i) => (
            <MemberCard
              member={member}
              key={i}
              isCurrent={email === member?.email}
            />
          ))}
        {fetching
          ? [...new Array(3)]?.map((i) => <MemberSkeleton key={i} />)
          : null}
      </Box>
    </Box>
  );
};

export default MembersView;
