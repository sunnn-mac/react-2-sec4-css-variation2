/** @jsxRuntime classic */
/** @jsx jsx */ //本当はこれだけでいいはず　　今はエラーが出るので、上の行が必要
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

// "@emotion/react","@emotion/styled" をdependency に追加
export const Emotion = () => {
  // sassと同じ書き方ができる
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  // inleineStyleと同じ書き方
  const titleStyle = css({
    margin: "0",
    color: "#3d84a8"
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <SButton>FIGHT!</SButton>
    </div>
  );
};
// styled componentsと同じ書き方
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
