import Head from "next/head";

export default function CustomHead({
  title,
  description,
  icon = "/favicon.ico",
  scripts,
}) {
  return (
    <Head>
      <title>{title || "AB test with preamp"}</title>
      <meta name="description" content={description ?? title} />
      <link rel="icon" href={icon} />
      {scripts && scripts.map((item) => item)}
    </Head>
  );
}
