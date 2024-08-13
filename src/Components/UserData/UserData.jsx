import { useDispatch, useSelector } from "react-redux";
import "./UserData.css";
import { GetUserDataAction } from "../../Redux/Actions/UserAction";
import { useEffect, useState } from "react";
const UserData = () => {
  // نشغل الاكشن
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const GetUserData = async () => {
    setLoading(true);
    await dispatch(GetUserDataAction());
    setLoading(false);
  };
  useEffect(() => {
    GetUserData();
  }, []);
  // نجيب الداتا اللي في الستيت
  let data = useSelector((data) => data.UserReducers);
  let userData = [];
  try {
    if (data?.UserData) {
      userData = data?.UserData;
    }
  } catch (e) {
    console.log(e);
  }
  return (
    <section className="user">
      {loading == false ? (
        <>
          {userData.map((user,index) => (
            <div className="user-container" key={index}>
              <p className="id">{user.userId}</p>
              <div className="title">{user.title}</div>
              <div className="desc">{user.body}</div>
            </div>
          ))}
        </>
      ) : (
        <p>loading</p>
      )}
    </section>
  );
};
export default UserData;
