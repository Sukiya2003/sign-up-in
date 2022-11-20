import React from "react";
import { Link } from "react-router-dom";

export default function LoginKampus() {

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
                    <h1 className="card-title">Masuk sebagai Kampus</h1>
                    <div className="card-text mt-2">
                      <div className="mb-3">
                        <label className="form-label">E-mail Kampus</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="info@ugm.ac.id"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Minimal 6 Digit"
                        />
                      </div>
                      <div className="col-12 mt-1">
                        <button
                          className="btn btn-primary col-12"
                        >
                          Masuk
                        </button>
                        <p className="text-center text-muted mt-2">
                          Belum punya akun?{" "}
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
    </>
  );
}
