import React, { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    // Preload the iframe content
    const iframe = document.createElement('iframe');
    iframe.src = "https://www.ultraehp.com/customized-iframe-tw.html";
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    return () => {
      document.body.removeChild(iframe);
    };
  }, []);

  return (
    <div className="w-full md:w-1/2 pr-0 md:pr-3">
      <Button onPress={onOpen} className="h-auto w-full p-0 m-0 border-2 hover:bg-gray-800 duration-250 hover:text-white border-gray-500 bg-transparent rounded-full px-4 py-3 my-3">
        聯絡我們
      </Button>

      <Modal isOpen={isOpen} placement="auto" onOpenChange={onOpenChange} className="z-50">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">聯絡我們-立即詢價</ModalHeader>
              <ModalBody>
                <iframe
                  title="contact-forms"
                  src="https://www.ultraehp.com/customized-iframe-tw.html"
                  className="w-[320px] md:w-[400px] h-[500px]"
                  frameBorder="0"
                  webkitAllowFullScreen=""
                  mozAllowFullScreen=""
                  allowFullScreen=""
                ></iframe>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
