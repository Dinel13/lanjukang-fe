import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import PendingButton from "../../components/elements/button/Pending";
import { login } from "../../store/authSlice";
import { showNotif } from "../../store/notifSlice";

export default function BecomeAdmin({ token }) {
  const nameRef = useRef(null);
  const rekeningRef = useRef(null);
  const bankRef = useRef(null);
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  // check if user have token
  if (!token) {
    // push to login page with state to redirect to become admin
    setTimeout(
      () =>
        history.push({
          pathname: "/masuk",
          state: {
            from: "/become-admin",
          },
        }),
      500
    );
  }

  const cancel = () => {
    history.goBack();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPending(true);
    console.log(token);
    try {
      const result = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/user/update-role`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name: nameRef.current.value,
            rekening: rekeningRef.current.value,
            bank: bankRef.current.value,
          }),
        }
      );
      const data = await result.json();
      if (!result.ok) {
        throw new Error(data.error.message || "gagal mengjadi admin");
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
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen overflow-hidden bg-transparent py-20 opacity-100 z-30">
        <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden">
            <div className="w-full">
              <div className="p-4 border-b-2">
                <span className="px-2 text-lg sm:text-xl md:text-2xl lg:text-4xl tracking-wide font-bold text-gray-800">
                  Jadi admin
                </span>
              </div>
              <form onSubmit={handleSubmit} className="py-4 px-6">
                <p className="text-sm text-gray-700 mb-3">
                  Kamu harus lengkapi beberapa data dibawah untuk dapat menawarkan layanan.
                </p>
                <div className="mb-3 space-y-2 w-full text-sm">
                    <label className="font-semibold text-gray-600">
                      Nama penyedia layanan <small className="required"></small>
                    </label>
                  <input
                    placeholder="Nama"
                    className="block input-field"
                    required="required"
                    type="text"
                    ref={nameRef}
                  />
                  <small className="text-gray-600">
                    Berikan nama yang unik dan menarik karena nama ini akan
                    tampil pada setiap layanan yang kamu tawarkan
                  </small>
                </div>
                <div className="mb-3 space-y-2 w-full text-sm">
                  <label className="font-semibold text-gray-600">
                    Nomor Rekening <small className="required"></small>
                  </label>
                  <input
                    placeholder="Nomor Rekening"
                    className="block input-field"
                    required="required"
                      ref={rekeningRef}
                      type="text"
                  />
                  <small className="text-gray-600">
                    Nomor rekening akan digunakan unutuk transaksi setiap pembelian
                    layanan
                  </small>
                </div>
                <div className="mb-3 space-y-2 w-full text-sm">
                  <label className="font-semibold text-gray-600">
                    Bank <small className="required"></small>
                  </label>
                  <input
                    placeholder="Nomor Rekening"
                    className="block input-field"
                    required="required"
                    type="text"
                    ref={bankRef}
                  />
                  <small className="text-gray-600">
                    Nomor rekening akan digunakan unutuk transaksi setiap pembelian
                    layanan
                  </small>
                </div>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox"
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
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-20 overflow-hidden bg-gray-800 opacity-50"></div>
    </>
  );
}
