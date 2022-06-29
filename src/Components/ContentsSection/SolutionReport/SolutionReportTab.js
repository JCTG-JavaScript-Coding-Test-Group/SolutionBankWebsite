import QuestionNameInput from "../CommonComponents/QuestionNameInput";
import GitHubLogin from "./Components/GitHubLogin";
import SolutionCodeInput from "./Components/SolutionCodeInput";
import SubmitButton from "../CommonComponents/SubmitButton";

export default function SolutionReportTab() {
  return (
    <div className="SolutionReportTab">
      <p>SolutionReportTab</p>
      <QuestionNameInput />
      <GitHubLogin />
      <SolutionCodeInput />
      <SubmitButton />
    </div>
  );
}
