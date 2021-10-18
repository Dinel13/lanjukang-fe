import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import PendingButton from "../../components/elements/button/Pending";
import { login } from "../../store/authSlice";
import { showNotif } from "../../store/notifSlice";

export default function BecomeAdmin({ token }) {
  const nameRef = useRef(null);
  const commitRef = useRef(null);
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const cancel = () => {
    history.goBack();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    try {
      const result = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/update-role`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: null,
        }
      );
      const data = await result.json();
      if (!result.ok) {
        throw new Error(data.message || "gagal mengjadi admin");
      }

      dispatch(
        login({
          token: data.user.token,
          id: data.user.id,
          name: data.user.name,
          role: data.user.role,
        })
      );
      dispatch(
        showNotif({
          status: "Success",
          message: "Data berhasil diupdate",
          action: null,
        })
      );
    } catch (error) {
      dispatch(
        showNotif({
          status: "Error",
          message: error.message,
          action: null,
        })
      );
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen overflow-hidden bg-transparent py-32 opacity-100 z-20">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg ">
          <div className="md:flex">
            <div className="w-full">
              <div className="p-4 border-b-2">
                <span className="px-3 text-lg font-bold text-gray-600">
                  Jadi admin
                </span>
              </div>
              <form onSubmit={handleSubmit} className="p-4 mt-2">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-600 py-2">
                    Nama Layanan <abbr title="required">*</abbr>
                  </label>
                  <input
                    placeholder="Nama Layanan"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required="required"
                    type="text"
                    ref={nameRef}
                  />
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      ref={commitRef}
                      required
                    />
                    <small className="text-gray-600 ml-2">
                      Saya setuju dengan layanan kebijakan lanjukang.com
                    </small>
                  </label>
                </div>
                <div className="mt-5 text-right space-x-3 block">
                  {pending ? (
                    <PendingButton />
                  ) : (
                    <>
                      <button
                        onClick={cancel}
                        type="reset"
                        className="btn-las py-2 px-6 text-sm font-medium tracking-wider my-2"
                      >
                        batal
                      </button>
                      <button
                        className="btn-sec py-2 px-6 text-sm font-medium tracking-wider"
                        type="submit"
                      >
                        Upload
                      </button>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-screen z-10 overflow-hidden bg-gray-800 opacity-50"></div>
    </>
  );
}
