import { getSessionInfo, getContactInfo } from "../database/model";

export async function getServerSideProps({ req }) {
  const userData = await getSessionInfo(req.cookies.sid);
  const user_id = JSON.parse(userData.data).user_id;
  const contactInfo = await getContactInfo(user_id);
  const username = contactInfo.username;
  const email = contactInfo.email;
  const cookie = req.cookies.sid;

  return {
    props: {
      user_id,
      username,
      email,
      cookie,
    },
  };
}

export default function Home({ user_id, username, email, cookie }) {
  return (
    <div>
      <p>Logged in as: {username} </p>
      <p>User id is: {user_id}</p>
      <p>Email is: {email}</p>
      <p>SID cookie is: {cookie}</p>

      <form method="POST" action="/api/log-out">
        <button id="logout">Log out</button>
      </form>
    </div>
  );
}