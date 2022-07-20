import { useRecoilValue } from "recoil";
import userState from "../../state/user";

const useUserValue = () => {
  return useRecoilValue(userState);
};
export default useUserValue;
