import NextLink from "next/link";

export default function Link({
  to,
  as,
  prefetch,
  replace,
  scroll,
  shallow,
  locale,
  children,
  ...props
}) {
  return (
    <NextLink
      href={to}
      as={as}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      locale={locale}
    >
      <a {...props}>{children}</a>
    </NextLink>
  );
}
