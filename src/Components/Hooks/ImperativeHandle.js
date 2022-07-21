import { useImperativeHandle, useRef, forwardRef } from "react";

const Parent = () => {
  const aString = useRef("");
  return <FancyInput ref={aString} />;
};

function FancyInput(props, ref) {
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
}

FancyInput = forwardRef(FancyInput);

export default Parent;
