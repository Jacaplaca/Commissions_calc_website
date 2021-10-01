import { FunctionComponent } from "react";
import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";

/**
 * @example
 * <Portal id="modal">
 *   <p>Thinking with portals</p>
 * </Portal>
 */

type Props = {
  id: String;
};

const Portal: FunctionComponent<Props> = ({ id, children }) => {
  const target = usePortal(id);
  if (target) {
    return createPortal(children, target);
  }
  return null;
};

export default Portal;
