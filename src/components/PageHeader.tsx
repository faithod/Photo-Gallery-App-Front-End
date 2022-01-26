import Login from "./Login";

export default function PageHeader(props: { title: string }) {
  return (
    <>
      <h1>{props.title}</h1>
      <Login />
    </>
  );
}
