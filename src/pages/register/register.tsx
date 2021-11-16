import { FC, useState } from 'react';
import { RegisterProps } from './register.t';
import { Wrapper } from './register.e';
import { NavBar } from '../../components';
import img_skelton from '../../assets/images/register/image_skleton.png';
import profile_img from '../../assets/images/register/Ellipse 6.png';

const Register: FC<RegisterProps> = () => {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
  });
  console.log(registerData);
  return (
    <Wrapper>
      <NavBar isLanding={false} userExist={false} bg='#e5e5e5' />
      <div className='about_page'>
        <h1 className='title'>Personal info</h1>
        <h4 className='info'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis.
        </h4>
      </div>
      <form>
        <div className='item'>
          <div className='name'>
            First Name <span className='asterics'>*</span>
            <div className='example'>Ex John Smith</div>
          </div>
          <div className='inputs'>
            <input
              type='text'
              placeholder='Enter first name here'
              required
              value={registerData.firstName}
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
            <input
              type='text'
              placeholder='Enter last name here'
              required
              value={registerData.lastName}
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className='item'>
          <div className='name'>
            E-mail
            <span className='asterics'> *</span>
          </div>
          <div className='inputs'>
            <input
              type='email'
              placeholder='Enter your email here'
              required
              value={registerData.email}
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
            <input
              type='number'
              placeholder='Enter your phone number '
              required
              value={registerData.phone}
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
            />
            <input
              type='text'
              placeholder='Enter your university name '
              required
              value={registerData.university}
              onChange={(e) =>
                setRegisterData((prev) => ({
                  ...prev,
                  university: e.target.value,
                }))
              }
            />
          </div>
        </div>
        <div className='item'>
          <div className='name'>
            Profile Picture <span className='asterics'> *</span>
          </div>
          <div className='inputs'>
            <div className='profile'>
              <img src={profile_img} alt='sd' className='profile_img' />
            </div>
          </div>
        </div>
        <div className='item'>
          <div className='name'>
            Student ID <span className='asterics'> *</span>
          </div>
          <div className='inputs'>
            <div className='image-drop'>
              <img src={img_skelton} alt='sd' className='download' />
              <p>
                Drop your image here, or{' '}
                <label className='browse' htmlFor='file'>
                  browse
                </label>
              </p>
              <input type='file' id='file' />
              <div className='example'>Supports: JPG, JPEG2000, PNG</div>
            </div>
          </div>
        </div>
        <div className='buttons'>
          <button>Cancel</button>
          <button type='submit' onClick={() => console.log(registerData)}>
            Create Account
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;
