const BASE_URL = "https://dev.api.syncremote.co/api/v1/admin/users";

export async function fetchUsers() {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  console.log("API Data:", data); // Log to see what the API actually returned
  return data.users;
}
