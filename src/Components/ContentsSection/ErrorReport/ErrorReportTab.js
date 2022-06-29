import ErrorCategoryInput from "./Components/ErrorCategoryInput";
import QuestionNameInput from "../CommonComponents/QuestionNameInput";
import ErrorDetailInput from "./Components/ErrorDetailInput";
import SubmitButton from "../CommonComponents/SubmitButton";

export default function ErrorReportTab() {
  return (
    <div className="ErrorReportTab">
      <p>ErrorReportTab</p>
      <ErrorCategoryInput />
      <QuestionNameInput />
      <ErrorDetailInput />
      <SubmitButton />
    </div>
  );
}
