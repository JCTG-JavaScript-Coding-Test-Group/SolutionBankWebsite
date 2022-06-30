import { useState } from "react";

export default function ErrorReport() {
  const [submitted, setSubmitted] = useState(false);
  const [errorCategory, setErrorCategory] = useState("");
  const [questionName, setQuestionName] = useState("");
  const [detailContent, setDetailContent] = useState("");

  let isQuestionNameUnvisible = errorCategory === "" || errorCategory === "error-notCopied";
  let isDetailContentUnvisible =
    errorCategory === "" || (errorCategory === "error-wrongAnswer" && questionName === "");
  let isSubmitBtnDisable = errorCategory === "error-other" && detailContent === "";

  function handleOtherErrorBtnClick() {
    setSubmitted(false);
    setErrorCategory("");
    setQuestionName("");
    setDetailContent("");
  }

  function handleErrorCategoryClick(e) {
    setErrorCategory(e.target.id);
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
      <button onClick={handleOtherErrorBtnClick}>다른 오류 제보</button>
    </div>
  ) : (
    <div>
      <div>
        <span>오류 유형: </span>
        <input
          type="radio"
          id="error-wrongAnswer"
          name="errorCategory"
          onClick={handleErrorCategoryClick}
        />
        <label htmlFor="error-wrongAnswer">정답 통과가 안돼요</label>
        <input
          type="radio"
          id="error-notCopied"
          name="errorCategory"
          onClick={handleErrorCategoryClick}
        />
        <label htmlFor="error-notCopied">코드 복사가 안돼요</label>
        <input
          type="radio"
          id="error-other"
          name="errorCategory"
          onClick={handleErrorCategoryClick}
        />
        <label htmlFor="error-other">기타</label>
      </div>

      {isQuestionNameUnvisible ? null : (
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
      )}

      {isDetailContentUnvisible ? null : (
        <>
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
