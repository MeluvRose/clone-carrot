import { FieldError, FieldErrors, useForm } from "react-hook-form";

interface iLoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const { register, handleSubmit } = useForm<iLoginForm>();

  const onVaild = (data: iLoginForm) => {
    console.log("i'm vaild");
  };
  const onInvaild = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form onSubmit={handleSubmit(onVaild, onInvaild)}>
      <input
        {...register("username", {
          required: "Username is Required",
          minLength: {
            message: "The username should be longer than 5 chars",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "Email is Required",
        })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: "Password is Required",
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
