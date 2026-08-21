"use client";

import { useEffect } from "react";

function isEditableTarget(target: EventTarget | null) {
  return (
    target instanceof HTMLElement &&
    (target.tagName === "INPUT" ||
      target.tagName === "TEXTAREA" ||
      target.isContentEditable)
  );
}

export default function CopyDeterrent() {
  useEffect(() => {
    const preventContextMenu = (event: MouseEvent) => event.preventDefault();
    const preventDrag = (event: DragEvent) => event.preventDefault();
    const preventCopy = (event: ClipboardEvent) => {
      if (!isEditableTarget(event.target)) event.preventDefault();
    };

    document.addEventListener("contextmenu", preventContextMenu);
    document.addEventListener("dragstart", preventDrag);
    document.addEventListener("copy", preventCopy);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("dragstart", preventDrag);
      document.removeEventListener("copy", preventCopy);
    };
  }, []);

  return null;
}
