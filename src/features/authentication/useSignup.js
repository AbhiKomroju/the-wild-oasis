import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Signup successful please verify the new user account from the user's email"
      );
    },
    onError: (error) => {
      toast.error(error.message || "Failed to signup");
    },
  });
  return { signup, isPending };
}
