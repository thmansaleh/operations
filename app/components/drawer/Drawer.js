
"use client";

import { setSetting } from "@/app/store/features/setting";
import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navs from "./Navs";

export default function DrawerComponent() {
  const display =useSelector(state=>state.setting.drawerDisplay)
  const [isOpen, setIsOpen] = useState(true);
const dispatch = useDispatch()
  const handleClose = () => {

    dispatch(setSetting({action:'drawerDisplay',data:!display}))
}
  return (
    <>
    
      <Drawer open={display} onClose={handleClose} position="right">
        <Drawer.Header title="القائمة" />
      <div>
        <Navs/>
      </div>
      </Drawer>
    </>
  );
}
