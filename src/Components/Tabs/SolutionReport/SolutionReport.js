export default function SolutionReport() {
  return (
    <div>
      <p>SolutionReportTab</p>
      <div className="questionNameSection">
        <span>문제 이름:</span>
        <input list="questionName" name="question" />
        <datalist id="questionName">
          <option value="1번문제" />
          <option value="2번문제" />
          <option value="3번문제" />
        </datalist>
      </div>
      <div className="gitHubLogin">
        <span>기여자 등록: </span>
        <button id="gitHubLoginBtn">GitHub 로그인</button>
      </div>
      <div className="SolutionCodeInput">
        <span>정답 코드: </span>
        <textarea rows="20" cols="100"></textarea>
      </div>
      <div className="SubmitButton">
        <button id="submitBtn">제출</button>
      </div>
    </div>
  );
}
