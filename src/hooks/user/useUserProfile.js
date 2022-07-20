import useUserValue from "./useUserValue";

const useUserProfile = () => {
  const user = useUserValue();
  return {
    profileImg: user.avatar_url ?? "",
    username: user.name ?? "",
    gitHubUrl: user.html_url ?? "",
  };
};
export default useUserProfile;
