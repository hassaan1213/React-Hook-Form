import './App.css';
import { useForm } from 'react-hook-form';
import Sdata from './component/Sdata';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(5),
});

function App() {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data)

  return (
    <div className="App">
      <h1 className="heading">React-Hook-Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Sdata.inputs.map((input, key) => {
          return (
            <div key={key}>
              <p>
                <label>
                  {input.label}
                </label>
              </p>
              <p>
                <input name={input.name}
                  className="input"
                  type={input.type}
                  ref={register} />

              </p>
              <p className="messages">{errors[input.name]?.message}</p>
            </div>
          );
        })}
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
