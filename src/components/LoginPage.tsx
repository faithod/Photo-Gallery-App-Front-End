export default function Login(props: {
  setToken: React.Dispatch<React.SetStateAction<undefined>>;
}): JSX.Element {
  return (
    <>
      <h3>Please Log In</h3>
      <form>
        <label htmlFor="email">Username/Email address</label>
        <br />
        <input type="text" id="email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input type="password" id="password" name="password" />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
