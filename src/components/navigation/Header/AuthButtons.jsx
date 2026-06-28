import Button from "@/components/ui/Button";

export default function AuthButtons({
  isAuthenticated = false,
  vertical = false,
}) {
  const classes = vertical
    ? "flex flex-col gap-3"
    : "flex items-center gap-3";

  if (isAuthenticated) {
    return (
      <div className={classes}>
        <Button variant="outline">
          Dashboard
        </Button>

        <Button variant="danger">
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className={classes}>
      <Button variant="ghost">
        Login
      </Button>

      <Button>
        Sign Up
      </Button>
    </div>
  );
}