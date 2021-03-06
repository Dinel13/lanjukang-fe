import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { logout, selectUserId } from "../../store/authSlice";
import { showNotif } from "../../store/notifSlice";
import UpdatePhoto from "./UpdatePhoto.js";

export default function MyAccount() {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = useSelector(selectUserId);
  const [user, setUser] = useState(null);
  const [isEditPhoto, setIsEditPhoto] = useState(false);

  const editPhoto = () => {
    setIsEditPhoto(prev => !prev);
  }
  // get user info
  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/user/detail/${id}`,
          {
            method: "GET",
          }
        );
        const result = await response.json();
        if (!response.ok) {
          throw new Error("Tidak bisa mendapatkan data user");
        }
        setUser(result.user);
      } catch (error) {
        dispatch(
          showNotif({
            status: "Error",
            message: error.message,
            action: null,
          })
        );
      }
    };
    getUser();
  }, [dispatch, id]);

  // const removeTulisan = async (slug, blogId) => {
  //   try {
  //     const respon = await fetch(
  //       `${process.env.REACT_APP_SERVER_URL}/blog/${slug}`,
  //       {
  //         method: "DELETE",
  //         headers: {
  //           Accept: "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if (!respon.ok) {
  //       throw new Error("Tidak bisa menghapus tulisan");
  //     }
  //     dispatch(
  //       showNotif({
  //         title: "Berhasil!!",
  //         message: "Tulisan Berhasil dihapus",
  //         action: null,
  //       })
  //     );
  //     setTimeout(() => dispatch(hideNotif), 2000);
  //     const updateBlog = user.blog.filter((blog) => blog._id !== blogId);
  //     setTimeout(
  //       () => setUser((prev) => ({ ...prev, blog: updateBlog })),
  //       2500
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     dispatch(
  //       showNotif({
  //         title: "Gagal!!",
  //         message: "Tidak bisa menghapus tulisan",
  //         action: null,
  //       })
  //     );
  //   }
  // };

  return (
    <div className="bg-white w-full md:w-5/6 lg:md-4/6 mx-auto overflow-hidden mt-24 ">
     { isEditPhoto && <UpdatePhoto cancel={editPhoto} />}
      <h2 className="text-center text-3xl mt-4 font-medium">My Account</h2>
      {user && (
        <>
          <div className="px-4 py-5 flex items-end sm:px-6">
            <a
              href={
                user.image
                  ? process.env.REACT_APP_SERVER_URL_IMAGE +
                    "/user/" +
                    user.image
                  : ""
              }
              rel="noreferrer"
              target="_blank"
            >
              <img
                alt="test"
                className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                style={{ height: "120px", width: "120px" }}
                src={
                  user.image
                    ? process.env.REACT_APP_SERVER_URL_IMAGE +
                      "/user/" +
                      user.image
                    : "https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
                }
              />
            </a>

            <div className="sm:mb-1.5">
              <h3 className="text-xl leading-none mb-1.5 mt-1 font-medium text-gray-900">
                {user.full_name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{user.nick_name}</p>
              <button onClick={editPhoto}>
                Edit Profile Image
              </button>
            </div>
            <div className="ml-auto flex flex-col sm:flex-row items-center ">
              <Link
                to={{
                  pathname: "/akunku/update",
                  state: {
                    userData: user,
                  },
                }}
                className="btn-sec py-2 px-4 m-2 tracking-wide leading-6"
              >
                Update
              </Link>
              <button
                onClick={() => {
                  dispatch(logout());
                  history.push("/");
                }}
                className="btn-las py-2 px-4 m-2 tracking-wide leading-6"
              >
                Logout
              </button>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Alamat email
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.email}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Phone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.phone}
                </dd>
              </div>
              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Bio</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.bio}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Modsos lain
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.medsos}
                </dd>
              </div>
              <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Alamat</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.address}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Tulisan</dt>
                {/* <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.blog.length !== 0 ? (
                    <ul className="border ml-0  border-gray-200 rounded-md divide-y divide-gray-200">
                      {user.blog.map((item) => (
                        <li
                          key={item._id}
                          className="px-2 py-3 flex items-center justify-between text-sm"
                        >
                          <div className="w-0 flex-1 flex items-center">
                            <span className="ml-1 flex-1 w-0 truncate">
                              {item.title}
                            </span>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <Link
                              to={`/bacaan/${item.slug}`}
                              className="font-medium mr-2.5 text-indigo-600 hover:text-indigo-500"
                            >
                              Lihat
                            </Link>
                            <Link
                              to={`/update-tulisan/${item.slug}`}
                              className="font-medium mr-2.5 text-indigo-500 hover:text-indigo-500"
                            >
                              Edit
                            </Link>
                            <button
                              onClick={() =>
                                dispatch(
                                  showNotif({
                                    status: "confirm",
                                    title: "Konfirmasi",
                                    message:
                                      "Kamu yakin ingin menghapus tulisan ini?",
                                    action: async () =>
                                      await removeTulisan(item.slug, item._id),
                                  })
                                )
                              }
                              className="font-medium text-red-600 hover:text-indigo-500"
                            >
                              Hapus
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    "Belum ada tulisan"
                  )}
                </dd> */}
              </div>
            </dl>
          </div>
        </>
      )}
    </div>
  );
}
