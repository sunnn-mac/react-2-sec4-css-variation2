import classes from "./CssModules.module.scss";

// node-sass を　package.json の Dependency に追加する
// scssの書き方ができる
// クラス名は、他のコンポーネントと競合しても構わない
export const CssModules = () => {
  return (
    <div className={classes.container}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT!</button>
    </div>
  );
};
