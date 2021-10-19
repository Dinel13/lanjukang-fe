import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import PendingButton from "../../components/elements/button/Pending";
import SubmitFull from "../../components/elements/button/Submit";
import Warning from "../../components/elements/Warning";
import { login } from "../../store/authAction";

export default function Login() {
  const dispatch = useDispatch();
  // const history = useHistory();
  const email = useRef();
  const password = useRef();
  const [pending, setPending] = useState(null);
  const location = useLocation();
  const from = location.state?.from;
  const [allert, setAllert] = useState(from);

  console.log(from);

  const onSuccessLogin = () => {
    setPending(false);
    // history.push("/")
    // const timer = setTimeout(() => history.push("/"), 4000);
    // return () => clearTimeout(timer);
  };

  const onFailLogin = () => setPending(false);

  const loginHandler = (event) => {
    event.preventDefault();
    setPending(true);
    dispatch(
      login(
        email.current.value,
        password.current.value,
        onSuccessLogin,
        onFailLogin
      )
    );
  };

  allert && setTimeout(() => setAllert(false), 6000);

  return (
    <>
      {allert && (
        <div className="absolute left-0 bottom-10 z-40">
          <Warning hide={() => setAllert(false)} />
        </div>
      )}
      <div className="py-16">
        <div className="form-card dark:bg-gray-800">
          <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">
            Masuk ke Lanjukang
          </h1>
          <form className="mt-6" onSubmit={loginHandler}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                Email
              </label>
              <input
                ref={email}
                type="email"
                autoComplete="email"
                id="email"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  Password
                </label>
                <Link
                  to="/lupa-password"
                  className="text-xs text-indigo-600 dark:text-gray-400 hover:underline"
                >
                  Lupa Password?
                </Link>
              </div>

              <input
                ref={password}
                type="password"
                id="password"
                autoComplete="current-password"
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div className="mt-6">
              {pending ? <PendingButton /> : <SubmitFull text="Masuk" />}
            </div>
          </form>

          <p className="mt-8 text-sm font-light text-center text-gray-700">
            Belum Punya Akun?{" "}
            <Link
              to="/daftar"
              className="font-medium text-indigo-600 dark:text-gray-200 hover:underline"
            >
              DAFTAR
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
