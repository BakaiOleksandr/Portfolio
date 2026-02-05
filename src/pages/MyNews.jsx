import style from './MyNews.module.css';

export default function MyNews() {
  return (
    <div className={style.MyNewsMain}>
      <div className={style.MyNewsContainer}>
        <div className={style.MyNewsHeader}>My News</div>

        <p>January 2026</p>
        <p>
          Completed the Full course <strong>'React&ReduxToolkit'</strong> in
          Udemy online-school
        </p>
        <div className={style.ImgContainer}>
          <img alt="React&Redux Certificate" src="./ReactReduxUdemy.jpg" />
        </div>
      </div>
    </div>
  );
}
