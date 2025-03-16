import { A, redirect, useNavigate } from "@solidjs/router";
import { BiRegularLoaderCircle } from "solid-icons/bi";
import { FaSolidUnlock } from "solid-icons/fa";
import { createSignal } from "solid-js";
import { createUser } from "~/api/users/service";
import { LS_USER_ID } from "~/consts/app";
import { ROUTES } from "~/consts/routes";
import Button from "~/ui/button";
import Input from "~/ui/input";

const RegisterPage = () => {
  const [email, setEmail] = createSignal("");
  const [name, setName] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal("");
  const navigate = useNavigate();

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await createUser({
      email: email(),
      name: name(),
    });

    if (!res) {
      setError("User not found");
    } else {
      localStorage.setItem(LS_USER_ID, res.id.toString());
      navigate(ROUTES.HOME);
    }
    setLoading(false);
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-zinc-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
          <p class="mt-2 text-center text-gray-600">
            Or{" "}
            <A
              href={ROUTES.LOGIN}
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign in to your account
            </A>
          </p>
        </div>

        <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div class="flex flex-col space-y-2">
            <Input
              id="email"
              label="Email address"
              name="email"
              onChange={setEmail}
              placeholder="Email address"
              type="email"
              value={email()}
            />
            <Input
              id="name"
              label="Name"
              name="name"
              onChange={setName}
              placeholder="Enter your name"
              type="text"
              value={name()}
            />
            {error() && <div class="text-red-500 text-sm">{error()}</div>}
          </div>

          <div>
            <Button type="submit" disabled={loading()}>
              {loading() ? (
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <BiRegularLoaderCircle />
                </span>
              ) : (
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaSolidUnlock />
                </span>
              )}
              {loading() ? "Signing in..." : "Sign in"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
