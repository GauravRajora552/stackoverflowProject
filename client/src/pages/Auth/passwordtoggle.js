import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const PasswordToggle = () => {
  const [visible, setVisibility] = useState(false);

  const Icon = visible ? <AiFillEyeInvisible /> : <AiFillEye />;

  const InputType = visible ? 'text' : 'password';

  return (
    <div>
      <input type={InputType} />
      <button onClick={() => setVisibility((visibility) => !visibility)}>
        {Icon}
      </button>
    </div>
  );
};

export default PasswordToggle;
