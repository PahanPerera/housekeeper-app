import { SubmitHandler, useForm } from "react-hook-form";
import { useRegister } from "./useRegister";
import { useNavigator } from "../../providers/Navigator";

type RegisterForm = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

export const Register = () => {
  const { call: registerUser, value, error } = useRegister();
  const { homePage } = useNavigator();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onSubmit: SubmitHandler<RegisterForm> = (data: RegisterForm) => {
    registerUser(data);
  };

  if (value) {
    homePage();
  }

  return (
    <section className="container mx-auto p-4 m-8 text-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <p className="p-2 bg-red-400 rounded text-white mb-2">
            Error while registering new user
          </p>
        )}

        <h1 className="text-2xl">Register New User</h1>
        <div className=" flex flex-col gap-4 my-4">
          <div className="flex flex-col">
            <input
              className="p-2 border rounded"
              type="name"
              placeholder="name"
              {...register("name", { required: true })}
            />
            <span className="text-red-400">{errors?.name?.type}</span>
          </div>

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

          <div className="flex flex-col">
            <input
              className="p-2 border rounded"
              type="password"
              placeholder="confirm password"
              {...register("passwordConfirm", { required: true })}
            />
            <span className="text-red-400">
              {errors?.passwordConfirm?.type}
            </span>
          </div>

          <button
            className="bg-amber-200 p-2 rounded cursor-pointer"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
};
