import { useState } from 'react';

// * FormData
export default function Signup() {
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const fd = new FormData(e.target);
    const acquisitionChannel = fd.getAll('acquisition');
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;

    if (data.password !== data['confirm-password']) {
      setPasswordsAreNotEqual(true);
      return;
    }

    console.log(data);

    // FormData에서 입력을 초기화 하려면
    // 아래처럼 reset()메서드를 불러오거나
    // 버튼의 타입을 reset으로 하면 된다. (둘중 하나만 해도됨)
    // e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className='control'>
        <label htmlFor='email'>Email</label>
        <input id='email' type='email' name='email' required />
      </div>

      <div className='control-row'>
        <div className='control'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            required
            minLength={6}
          />
        </div>

        <div className='control'>
          <label htmlFor='confirm-password'>Confirm Password</label>
          <input
            id='confirm-password'
            type='password'
            name='confirm-password'
            required
          />
        </div>
        <div className='control-error'>
          {passwordsAreNotEqual && <p>Password not match.</p>}
        </div>
      </div>

      <hr />

      <div className='control-row'>
        <div className='control'>
          <label htmlFor='first-name'>First Name</label>
          <input type='text' id='first-name' name='first-name' required />
        </div>

        <div className='control'>
          <label htmlFor='last-name'>Last Name</label>
          <input type='text' id='last-name' name='last-name' required />
        </div>
      </div>

      <div className='control'>
        <label htmlFor='phone'>What best describes your role?</label>
        <select id='role' name='role' required>
          <option value='student'>Student</option>
          <option value='teacher'>Teacher</option>
          <option value='employee'>Employee</option>
          <option value='founder'>Founder</option>
          <option value='other'>Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className='control'>
          <input
            type='checkbox'
            id='google'
            name='acquisition'
            value='google'
          />
          <label htmlFor='google'>Google</label>
        </div>

        <div className='control'>
          <input
            type='checkbox'
            id='friend'
            name='acquisition'
            value='friend'
          />
          <label htmlFor='friend'>Referred by friend</label>
        </div>

        <div className='control'>
          <input type='checkbox' id='other' name='acquisition' value='other' />
          <label htmlFor='other'>Other</label>
        </div>
      </fieldset>

      <div className='control'>
        <label htmlFor='terms-and-conditions'>
          <input
            type='checkbox'
            id='terms-and-conditions'
            name='terms'
            required
          />
          I agree to the terms and conditions
        </label>
      </div>

      <p className='form-actions'>
        <button type='reset' className='button button-flat'>
          Reset
        </button>
        <button type='submit' className='button'>
          Sign up
        </button>
      </p>
    </form>
  );
}
