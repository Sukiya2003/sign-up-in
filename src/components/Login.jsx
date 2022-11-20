import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUser } from "../redux/action/listUserAction";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const state = useSelector((state) => state.listUser);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    dispatch(getUser());
  }, []);

  const handlingSubmit = () => {
    const data = {
      email,
      password,
    };

    console.log(data);
  };

  return (
    <>
      <div className="container">
        <div className="row vh-100">
          <div className="col my-auto">
            <div className="card mb-3 mx-auto" style={{ maxWidth: "1500px" }}>
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1484901815/nr8hx938nv4rhp3jflgf.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-6 my-auto">
                  <div className="card-body">
                    <h1 className="card-title">Masuk</h1>
                    <div className="card-text mt-2">
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="jhondoe@gmail.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Minimal 6 Digit"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button
                        className="btn btn-primary col-12"
                        onClick={handlingSubmit}
                      >
                        Masuk
                      </button>
                      <p className="text-center text-muted mt-2">
                        Belum punya akun?{" "}
                        <span>
                          <Link to={"/"}>disini</Link>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
