
import { Dropdown } from "flowbite-react";
import DeleteReportModal from "./DeleteReportBtn";

export default function MoreInfo() {
  return (
    <Dropdown label="" dismissOnClick={false} renderTrigger={() => <svg className="w-4 h-4 fill-gray-600 " stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 128 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"></path></svg>}>
  <DeleteReportModal/>
      {/* <Dropdown.Item className=" text-red-500">Sign out</Dropdown.Item> */}
    </Dropdown>
  );
}
