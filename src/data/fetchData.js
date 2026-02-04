async function getAllPatients() {
  try {
    const URL = "https://fedskillstest.coalitiontechnologies.workers.dev";
    const username = "coalition";
    const password = "skills-test";
    const encoded = btoa(`${username}:${password}`);

    const response = await fetch(URL, {
      method: "GET",
      headers: {
        "Authorization": `Basic ${encoded}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) throw new Error("Fetch failed");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Call the function and log results
getAllPatients().then(data => {
  console.log("Fetched patients:", data);

  // Filter only Jessica Taylor if needed
  const jessica = data.filter(p => p.name === "Jessica Taylor");
  console.log("Jessica Taylor only:", jessica);
});
