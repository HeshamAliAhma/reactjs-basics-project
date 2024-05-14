import React, { Fragment, MutableRefObject } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "./Button";

interface Iprops {
  title: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  cancelButtonRef: MutableRefObject<HTMLElement | null>;
  children: React.ReactNode;
}

function Modal({
  title,
  open,
  setOpen,
  cancelButtonRef,
  children,
}: Iprops) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Latest <span className="text-indigo-600">Products</span></h1> 
        <Button
          className="inline-flex justify-center bg-indigo-600  hover:indigo-red-500"
          onClick={() => setOpen(true)}
          width="w-fit"
        >
          open modal
        </Button>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 sm:mt-0 text-left w-full">
                        <Dialog.Title
                          as="h3"
                          className="text-base text-center font-bold leading-6 text-gray-900"
                        >
                          {title}
                        </Dialog.Title>

                          {children}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
export default Modal;