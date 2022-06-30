import { useSetRecoilState } from "recoil";
import { tabNoState } from "../../recoil/atom";

export default function TabNavigation() {
  const setTabNo = useSetRecoilState(tabNoState);

  function tabClicked(e) {
    let targetId = e.target.id;
    setTabNo(targetId[targetId.length - 1]);
  }

  return (
    <div className="navigationTab">
      <ul className="tabs">
        <li id="tab0" onClick={tabClicked}>
          소개
        </li>
        <li id="tab1" onClick={tabClicked}>
          오류제보
        </li>
        <li id="tab2" onClick={tabClicked}>
          정답제보
        </li>
      </ul>
    </div>
  );
}
