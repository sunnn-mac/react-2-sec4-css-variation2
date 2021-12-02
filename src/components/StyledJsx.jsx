// dpacage.json に ependency に　styled-jsxを追加
// デフォルトでは擬似要素 &:hover など　を使えない　　　プラグイン入れればできるようになる
// VSCode使えば、cssに色がついたり、補完できるようにすることも可能
// StyledJsxは、Next.js　にデフォルトで入っている
export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled Jsx -</p>
        <button className="button">FIGHT!</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
