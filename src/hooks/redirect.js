import { useHistory } from "react-router";

export default function useRedirect() {
  const history = useHistory();

  function redirect(error, from) {
    if (error.message === "token expired") {
      history.push({
        pathname: "/masuk",
        state: {
          from,
        },
      });
    }
  }

  return redirect
}
