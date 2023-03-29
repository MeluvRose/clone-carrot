import { FieldError, FieldErrors, useForm } from "react-hook-form";

interface iLoginForm {
  username: string;
  email: string;
  password: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>({
    mode: "onChange",
  });

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
          validate: {
            notGmail: (value) =>
              //   !value.includes("@gmail.com") ? "" : "Gmail is not allowed",
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email?.message) ? "border-red-200" : ""}`}
      />
      {errors.email?.message}
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
