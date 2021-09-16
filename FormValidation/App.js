import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            {...register("email", {
              required: "Email required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Email is not valid"
              },
            })}
            onKeyUp={() => {
              trigger("email");
            }}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            {...register("password", { required: "Password is required" })}
            onKeyUp={() => {
              trigger("password");
            }}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            {...register("age", {
              required: "Age required",
              min: { value: 18, message: "Minimum age is 18" },
              max: { value: 50, message: "Maximum age is 50" },
            })}
            onKeyUp={() => {
              trigger("age");
            }}
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
