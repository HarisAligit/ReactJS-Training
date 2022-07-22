import { useImperativeHandle, useRef, forwardRef } from "react";

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
});

export default FancyInput;
