import axios from "axios";
import React from "react";
import style from "../../../styles/pages/loginStyle.module.scss";
import Head from "next/head";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";
import Link from "next/link";
import * as auth from "../../../store/reducer/auth";
import { useDispatch, useSelector } from "react-redux";

function Recruiter() {
  const router = useRouter();
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    let checkIsLogin = store.auth.profile && store.auth.token;

    if (checkIsLogin) {
      router.replace("/");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      const connect = await axios.post("/api/login", {
        email,
        password,
      });

      setIsLoading(false);
      setError(null);

      if (connect?.data?.data?.recruiter_id) {
        dispatch(auth.setToken(connect?.data?.token));
        dispatch(auth.setProfile(connect?.data?.data));
        setCookie("token", connect?.data?.token);
      } else {
        setError("Can't login in this area");
      }
    } catch (error) {
      setIsLoading(false);
      setError(
        error?.response?.data?.messages ?? "Something wrong in our server"
      );
    }
  };

  return (
    <>
      <Head>
        <title>Login Recruiter | Hire Jobs</title>
      </Head>
      <main className={style.main}>
        <div className="row">
          <div className="col-md-6">
            <div className={style.colKiri}>
              <div className={style.overlay} />

              <div className={style.content}>
                <h1>
                  Temukan developer berbakat & terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={style.centerContent}>
              <div className={style.colKanan}>
                <h2>Halo, Pewpeople</h2>
                <p className={error ? "mb-3" : "mb-5"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  euismod ipsum et dui rhoncus auctor.
                </p>

                {error && (
                  <div class="alert alert-danger mb-3" role="alert">
                    {error}
                  </div>
                )}

                <form>
                  <div className="mb-4">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Masukan alamat email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-5">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      placeholder="Masukan kata sandi"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div class="d-grid mb-3">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      onClick={handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Masuk"}
                    </button>
                  </div>

                  <p className="text-center">
                    Anda belum punya akun?{" "}
                    <Link href="/auth/register/recruiter">Daftar disini</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Recruiter;

// css module
