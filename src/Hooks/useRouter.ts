import { useMemo } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function useRouter() {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();
  const match = useRouteMatch();

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      path: location.pathname,
      history,
      params,
      match,
      location,
    };
  }, [history, params, match, location]);
}
export default useRouter;
