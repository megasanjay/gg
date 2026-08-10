import Link from "next/link";

export function Button({
  href,
  children,
  variant = "primary",
  newTab,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  newTab?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all";
  const styles =
    variant === "primary"
      ? "bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
      : "border border-neutral-300 text-neutral-800 hover:border-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-200";

  if (newTab || href.startsWith("http")) {
    return (
      <a
        href={href}
        className={`${base} ${styles}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
