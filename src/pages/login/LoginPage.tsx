import { createSignal } from "solid-js";
import { FaSolidUnlock } from "solid-icons/fa";
import { BiRegularLoaderCircle } from "solid-icons/bi";
import { getUserByEmail } from "~/api/users/service";
import Input from "~/ui/input";
import Button from "~/ui/button";
import { A, redirect, useNavigate } from "@solidjs/router";
import { ROUTES } from "~/consts/routes";
import { LS_USER_ID } from "~/consts/app";

const LoginPage = () => {
  const [email, setEmail] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal("");
  const navigate = useNavigate();

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await getUserByEmail(email());
    
    if (!res) {
      setError("Something went wrong");
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
            Sign in to your account
          </h2>
          <p class="mt-2 text-center text-gray-600">
            Or{" "}
            <A
              href={ROUTES.REGISTER}
              class="font-medium text-indigo-600 hover:text-indigo-500"
            >
              create a new account
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

export default LoginPage;
