import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import PendingButton from "../../components/elements/button/Pending";
import { showNotif } from "../../store/notifSlice";

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
    formData.append("location_id", locationRef.current.value);
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
            <h2 className="font-semibold md:text-xl lg:text-2xl ">
              Detail Layanan Kamu
            </h2>
            <form onSubmit={submitHandler} className="mt-5">
              <div className="md:flex flex-row md:space-x-4 w-full text-xs">
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-600 py-2">
                    Nama Layanan <small className="required"></small>
                  </label>
                  <input
                    placeholder="Nama Layanan"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required="required"
                    type="text"
                    ref={nameRef}
                  />
                </div>
                <div className="mb-3 space-y-2 w-full text-xs">
                  <label className="font-semibold text-gray-600 py-2">
                    Kapasitas Layanan <small className="required"></small>
                  </label>
                  <input
                    placeholder="Kapasitas Layanan"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required="required"
                    type="number"
                    ref={capacityRef}
                  />
                </div>
              </div>
              <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-600 py-2">
                    Harga Layanan (Rp/satu layanan){" "}
                    <small className="required"></small>
                  </label>
                  <input
                    placeholder="Harga Layanan"
                    className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4"
                    required="required"
                    type="number"
                    ref={priceRef}
                  />
                </div>
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-600 py-2">
                    Location<small className="required"></small>
                  </label>
                  <select
                    className="block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4 md:w-full "
                    required="required"
                    ref={locationRef}
                  >
                    <option value="">Seleted location</option>
                    <option value="1">Cochin,KL</option>
                    <option value="2">Mumbai,MH</option>
                    <option value="3">Bangalore,KA</option>
                  </select>
                  <p className="text-sm text-red-500 hidden mt-3" id="error">
                    Please fill out this field.
                  </p>
                </div>
              </div>
              <div className="md:flex md:flex-row md:space-x-4 w-full text-xs">
                <div className="w-full flex flex-col mb-3">
                  <label className="font-semibold text-gray-600 py-2">
                    Foto Layanan <small className="required"></small>
                  </label>
                  <label className="inline-flex items-center appearance-none w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg h-10 px-4">
                    <input
                      // ref={imageRef}
                      type="file"
                      accept="image/*"
                      alt="your image"
                      ref={imageRef}
                      required
                      // hidden untuk menghilangkan nama file yang diupload
                    />
                  </label>
                  <p className="text-red text-xs hidden">
                    Please fill out this field.
                  </p>
                </div>
              </div>
              <div className="flex-auto w-full mb-1 text-xs space-y-2 mt-2">
                <label className="font-semibold text-gray-600 py-2">
                  Deskripsi Layanan <small className="required"></small>
                </label>
                <textarea
                  required=""
                  name="message"
                  ref={descRef}
                  className="w-full min-h-[100px] max-h-[300px] h-28 appearance-none block bg-grey-lighter text-grey-darker border border-grey-lighter rounded-lg  py-4 px-4"
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
