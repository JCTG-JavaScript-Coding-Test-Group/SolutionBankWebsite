export default function QuestionNameSection() {
  return (
    <div className="questionNameSection">
      <span>문제 이름:</span>
      <input list="questionName" name="question" />
      <datalist id="questionName">
        <option value="1번문제" />
        <option value="2번문제" />
        <option value="3번문제" />
      </datalist>
    </div>
  );
}
