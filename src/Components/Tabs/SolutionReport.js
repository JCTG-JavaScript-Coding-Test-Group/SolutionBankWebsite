import { useState } from "react";

export default function SolutionReport() {
  const [submitted, setSubmitted] = useState(false);
  const [questionName, setQuestionName] = useState("");
  const [detailContent, setDetailContent] = useState("");

  let isDetailContentUnvisible = questionName === "";
  let isSubmitBtnDisable = detailContent === "";

  function handleOtherSolutionBtnClick() {
    setSubmitted(false);
    setQuestionName("");
    setDetailContent("");
  }

  function handleQuestionNameInput(e) {
    setQuestionName(e.target.value);
  }

  function handleDetailContentInput(e) {
    setDetailContent(e.target.value);
  }

  function handleSubmitBtnClick() {
    setSubmitted(true);
  }

  return submitted ? (
    <div>
      <p>제보해주셔서 감사합니다.</p>
      <button onClick={handleOtherSolutionBtnClick}>다른 정답 제보</button>
    </div>
  ) : (
    <div>
      <div>
        <span>문제 이름:</span>
        <input
          list="questionName"
          name="question"
          onInput={handleQuestionNameInput}
          defaultValue={questionName}
        />
        <datalist id="questionName">
          <option value="1번문제" />
          <option value="2번문제" />
          <option value="3번문제" />
        </datalist>
      </div>

      {isDetailContentUnvisible ? null : (
        <>
          <div className="gitHubLogin">
            <span>기여자 등록: </span>
            <button id="gitHubLoginBtn">GitHub 로그인</button>
          </div>
          <div>
            <span>내용: </span>
            <textarea
              rows="20"
              cols="100"
              onInput={handleDetailContentInput}
              defaultValue={detailContent}
            ></textarea>
          </div>
          <div>
            <button id="submitBtn" disabled={isSubmitBtnDisable} onClick={handleSubmitBtnClick}>
              제출
            </button>
          </div>
        </>
      )}
    </div>
  );
}
