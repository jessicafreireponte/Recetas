import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div id="root">
      <Outlet />
    </div>
  );
}

export default Root;
