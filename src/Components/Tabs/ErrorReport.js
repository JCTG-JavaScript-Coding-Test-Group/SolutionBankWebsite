import { useState } from "react";

export default function ErrorReport() {
  const [submitted, setSubmitted] = useState(false);
  const [errorCategory, setErrorCategory] = useState(-1);
  const [questionName, setQuestionName] = useState("");
  const [detailInput, setDetailInput] = useState("");

  return submitted ? (
    <div>
      <p>제보해주셔서 감사합니다.</p>
      <button
        onClick={() => {
          setSubmitted(false);
          setErrorCategory(-1);
          setQuestionName("");
          setDetailInput("");
        }}
      >
        다른 오류 제보
      </button>
    </div>
  ) : (
    <div>
      <div>
        <span>오류 유형: </span>
        <input
          type="radio"
          id="errorCategory0"
          name="errorCategory"
          onClick={() => setErrorCategory(0)}
        />
        <label htmlFor="errorCategory0">정답 통과가 안돼요</label>
        <input
          type="radio"
          id="errorCategory1"
          name="errorCategory"
          onClick={() => setErrorCategory(1)}
        />
        <label htmlFor="errorCategory1">코드 복사가 안돼요</label>
        <input
          type="radio"
          id="errorCategory2"
          name="errorCategory"
          onClick={() => setErrorCategory(2)}
        />
        <label htmlFor="errorCategory2">기타</label>
      </div>

      {errorCategory === -1 || errorCategory === 1 ? null : (
        <div>
          <span>문제 이름:</span>
          <input
            list="questionName"
            name="question"
            onInput={(e) => setQuestionName(e.target.value)}
            defaultValue={questionName}
          />
          <datalist id="questionName">
            <option value="1번문제" />
            <option value="2번문제" />
            <option value="3번문제" />
          </datalist>
        </div>
      )}

      {errorCategory === -1 || (errorCategory === 0 && questionName === "") ? null : (
        <>
          <div>
            <span>내용: </span>
            <textarea
              rows="20"
              cols="100"
              onInput={(e) => setDetailInput(e.target.value)}
              defaultValue={detailInput}
            ></textarea>
          </div>
          <div>
            <button
              id="submitBtn"
              disabled={errorCategory === 2 && detailInput === ""}
              onClick={() => setSubmitted(true)}
            >
              제출
            </button>
          </div>
        </>
      )}
    </div>
  );
}
