import { useContext } from "react";
import Context from "../store/Context";

export default function useStore() {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
}
