import { FunctionComponent } from "react";
import { createPortal } from "react-dom";
import usePortal from "../../hooks/usePortal";

/**
 * @example
 * <Portal id="modal">
 *   <p>Thinking with portals</p>
 * </Portal>
 */

export type PortalProps = {
  portalId: string;
};

const Portal: FunctionComponent<PortalProps> = ({ portalId, children }) => {
  const target = usePortal(portalId);
  console.log("🚀 ~ file: index.tsx ~ line 18 ~ target", target);
  if (target) {
    return createPortal(children, target);
  }
  return null;
};

export default Portal;
