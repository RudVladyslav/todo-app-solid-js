import { createSignal } from "solid-js";
import { FaSolidUnlock } from "solid-icons/fa";
import { BiRegularLoaderCircle } from "solid-icons/bi";
import { getUserByEmail } from "~/api/users/service";
import Input from "~/ui/input";

const LoginPage = () => {
  const [email, setEmail] = createSignal("");
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal("");

  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await getUserByEmail(email());
    if (!res) {
      setError("User not found");
      return;
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
        </div>

        <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Input
            id="email"
            label="Email address"
            name="email"
            onChange={setEmail}
            placeholder="Email address"
            type="email"
            value={email()}
          />

          {error() && (
            <div class="text-red-500 text-sm text-center">{error()}</div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading()}
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
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
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
