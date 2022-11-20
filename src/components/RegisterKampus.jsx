import React from "react";
import { Link } from "react-router-dom";

export default function RegisterKampus() {
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
                <div className="col-md-6 my-auto">
                  <div className="card-body">
                    <h1 className="card-title">Daftar sebagai Kampus</h1>
                    <div className="card-text">
                      <div className="row">
                        <div className="col-12 my-2">
                          <label className="form-label">E-Mail Kampus</label>
                          <input
                            type="text"
                            className="form-control"
                            id="inputEmail"
                            placeholder="info@ugm.ac.id"
                          />
                        </div>
                        <div className="col-12 my-2">
                          <label className="form-label">Password</label>
                          <input
                            type="Password"
                            className="form-control"
                            id="inputPassword"
                            placeholder="Minimal 6 Digit"
                          />
                        </div>
                        <div className="col-12 mt-1">
                          <button className="btn btn-primary col-12">
                            Daftar
                          </button>
                          <p className="text-center text-muted mt-2">
                            Sudah punya akun?{" "}
                            <span>
                              <Link to={"/login/kampus"}>disini</Link>
                            </span>
                            <span>
                              {" "}
                              <br /> atau <br />{" "}
                            </span>
                            Daftar sebagai pengguna{" "}
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
        </div>
      </div>
    </>
  );
}
