import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import PendingButton from "../../components/elements/button/Pending";
import { showNotif } from "../../store/notifSlice";
import Kabupaten from "./kabupaten";

export default function CreateLayanan({ token, type }) {
  const formRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const descRef = useRef();
  const locationRef = useRef();
  const imageRef = useRef();
  const capacityRef = useRef();
  const [pending, setPending] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    formRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("price", priceRef.current.value);
    formData.append("description", descRef.current.value);
    formData.append("location", locationRef.current.value);
    formData.append("type_id", type);
    formData.append("image", imageRef.current.files[0]);
    formData.append("capacity", capacityRef.current.value);
    console.log(formData);

    try {
      const result = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/service/create`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );
      const data = await result.json();
      if (!result.ok) {
        throw new Error(data.message || "gagal mengupload layanan");
      }
      dispatch(
        showNotif({
          status: "Success",
          message: "Data berhasil disimpan",
          action: null,
        })
      );
      setTimeout(
        history.push({
          pathname: "/user/layanan/" + data.service.id,
          state: {
            service: data.service,
          },
        }),
        1000
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
    <div className="w-full flex justify-center mt-14" ref={formRef}>
      <div className="max-w-2xl w-full space-y-14 p-10 bg-gray-50 border-2 border-gray-200 rounded-xl shadow-xl z-10">
        <div className="grid  gap-8 grid-cols-1">
          <div className="flex flex-col ">
            <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl ">
              Detail Layanan Kamu
            </h2>
            <form onSubmit={submitHandler} className="mt-5 text-sm">
              <div className="md:flex flex-row md:space-x-4 w-full ">
                <div className="mb-3 space-y-2 w-full">
                  <label className="font-semibold text-gray-600 py-2">
                    Nama Layanan <small className="required"></small>
                  </label>
                  <input
                    placeholder="Nama Layanan"
                    className="block input-field"
                    required="required"
                    type="text"
                    ref={nameRef}
                  />
                </div>
                <div className="mb-3 space-y-2 w-full">
                  <label className="font-semibold text-gray-600 py-2">
                    Kapasitas Layanan <small className="required"></small>
                  </label>
                  <input
                    placeholder="Kapasitas Layanan"
                    className="block input-field"
                    required="required"
                    type="number"
                    ref={capacityRef}
                  />
                </div>
              </div>
              <div className="md:flex md:flex-row md:space-x-4 w-full">
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-600 py-2">
                    Harga Layanan (Rp/satu layanan){" "}
                    <small className="required"></small>
                  </label>
                  <input
                    placeholder="Harga Layanan"
                    className="block input-field"
                    required="required"
                    type="number"
                    ref={priceRef}
                  />
                </div>
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-600 py-2">
                    Location<small className="required"></small>
                  </label>
                  <input
                    list="location"
                    name="mylocation"
                    required="required"
                    className="block input-field"
                    ref={locationRef}
                    placeholder="cari lokasi"
                  />
                  <datalist id="location">
                    {Kabupaten.map((item, index) => (
                      <option key={index} value={item} />
                    ))}
                  </datalist>
                </div>
              </div>
              <div className="md:flex md:flex-row md:space-x-4 w-full">
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-600 py-2">
                    Foto Layanan <small className="required"></small>
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    alt="your image"
                    ref={imageRef}
                    className="block input-field"
                    required
                    // hidden untuk menghilangkan nama file yang diupload
                  />
                </div>
              </div>
              <div className="flex-auto w-full mb-1 space-y-2 mt-2">
                <label className="font-semibold text-gray-600 py-2">
                  Deskripsi Layanan <small className="required"></small>
                </label>
                <textarea
                  required=""
                  name="message"
                  ref={descRef}
                  className="w-full min-h-[100px] max-h-[300px] h-28 block input-field"
                  placeholder="Enter your comapny info"
                  spellCheck="false"
                ></textarea>
              </div>
              <p className="text-xs text-red-500 text-right my-3">
                Required fields are marked with an asterisk{" "}
                <abbr title="Required field">*</abbr>
              </p>
              <div className="mt-5 text-right space-x-3 block">
                {pending ? (
                  <PendingButton />
                ) : (
                  <>
                    <button
                      type="reset"
                      className="btn-las py-2 px-5 text-sm font-medium tracking-wider my-2 "
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn-sec py-2 px-6 text-sm font-medium tracking-wider "
                    >
                      Save
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
