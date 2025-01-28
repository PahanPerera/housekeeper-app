import { SubmitHandler, useForm } from "react-hook-form";

type LoginForm = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit: SubmitHandler<LoginForm> = () => {};

  return (
    <section className="container mx-auto p-4 m-8 text-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-2xl">Login</h1>
        <div className=" flex flex-col gap-4 my-4">
          <div className="flex flex-col">
            <input
              className="p-2 border rounded"
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
            />
            <span className="text-red-400">{errors?.email?.type}</span>
          </div>

          <div className="flex flex-col">
            <input
              className="p-2 border rounded"
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
            />
            <span className="text-red-400">{errors?.password?.type}</span>
          </div>

          <button
            className="bg-amber-200 p-2 rounded cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
};
