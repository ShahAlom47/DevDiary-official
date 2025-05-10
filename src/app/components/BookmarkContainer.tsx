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

const BookmarkContainer = () => {
  return (
    <div>
      <Drawer >
        <DrawerTrigger><BsFillJournalBookmarkFill /></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className=" h-full">
            <DrawerTitle className="bg-color-primary ">BookMark</DrawerTitle>
            <DrawerDescription>
                This action cannot be undone.
                </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
           
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default BookmarkContainer;
