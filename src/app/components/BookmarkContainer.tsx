"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";

const BookmarkContainer = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <BsFillJournalBookmarkFill />
        </DrawerTrigger>
        <DrawerContent className="  border-l-8  border-primary-border  ">
          <DrawerHeader className=" h-full">
            <DrawerTitle className="bg-color-primary py-3  border-b-4 border-primary-border px-2 text-gray-300">
              BookMark
            </DrawerTitle>
            <DrawerDescription className=" p-4 relative h-full  ">
              <DrawerClose className="absolute top-5/12 left-0 bg-primary-border  py-6 px-0.5 rounded-r-md">
              <BiSolidRightArrow size={16} className=" text-gray-300" />
                {/* <Button variant="outline">Cancel</Button> */}
              </DrawerClose>
              This action cannot be undone.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default BookmarkContainer;
