import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { uploadDataUser } from "../redux/action/listUserAction";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handlingSubmit = () => {
    const data = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch (uploadDataUser(data))

    console.log(data);
  };
  return (
    <>
      <div className="container">
        <div className="row vh-100">
          <div className="col my-auto">
            <div className="card mx-auto" style={{ maxWidth: "1500px" }}>
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1484901815/nr8hx938nv4rhp3jflgf.jpg"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h1 className="card-title">
                      Daftar sekarang secara gratis!
                    </h1>
                    <div className="card-text">
                      <div className="row">
                        <div className="col-xxl-6">
                          <label className="form-label">Nama Depan</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputNama"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </div>
                        <div className="col-xl-6">
                          <label className="form-label">Nama Belakang</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputNamaBelakang"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </div>
                        <div className="col-12 my-2">
                          <label className="form-label">E-Mail</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail"
                            placeholder="jhondoe@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="col-12 my-2">
                          <label className="form-label">Password</label>
                          <input
                            type="Password"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Minimal 6 Digit"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                        <div className="col-12 mt-1">
                          <button
                            className="btn btn-primary col-12"
                            onClick={handlingSubmit}
                          >
                            Daftar
                          </button>
                          <p className="text-center text-muted mt-2">
                            Sudah punya akun?{" "}
                            <span>
                              <Link to={"/login"}>disini</Link>
                            </span>
                            <span>
                              {" "}
                              <br /> atau <br />{" "}
                            </span>
                            Daftar sebagai Universitas{" "}
                            <span>
                              <Link to={"/daftar/kampus"}>disini</Link>
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
        </div>
      </div>
    </>
  );
}
