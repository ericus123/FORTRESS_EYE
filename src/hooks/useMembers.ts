import { useEffect } from "react";
import { useSelector } from "react-redux";
import { CombinedError, useQuery } from "urql";
import { GET_MEMBERS_QUERY } from "../graphql/queries/members";
import { useAppDispatch } from "../redux/hooks";
import { saveMembers } from "../redux/modules/member/memberSlice";
import { RootState } from "../redux/modules/rootReducer";

export type Member = {
  avatar: string;
  bio: string;
  createdAt: Date;
  deletedAt: Date;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  updatedAt: string;
  username: string;
  isVerified: boolean;
  role: Role;
};

export type Permission = {
  permissionName: string;
  description: string;
};

export type Role = {
  roleName: string;
  description: string;
  permissions: Permission;
};

export type MemberResponse = {
  data: Member[];
  fetching: boolean;
  error?: CombinedError;
};
export const useMembers = () => {
  const [{ data, fetching, error }] = useQuery({
    query: GET_MEMBERS_QUERY
  });

  const { members } = useSelector(({ member }: RootState) => member);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data != undefined) {
      dispatch(saveMembers(data?.GetUsers));
    }
  }, [data]);

  return {
    data: members,
    fetching,
    error
  };
};
