import { useSetRecoilState } from "recoil";
import userState from "../../state/user";

const useSetUser = () => {
  return useSetRecoilState(userState);
};
export default useSetUser;
