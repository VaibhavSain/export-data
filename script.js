const exportBtn = document.querySelector("#exportBtn");

const exportData = () => {
  const table = document.querySelector(".table");
  const rows = table.querySelectorAll("tbody tr");

  const data = [];

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");

    const rowData = {
      col1: cells[0]?.textContent.trim(),
      col2: cells[1]?.textContent.trim(),
      col3: cells[2]?.textContent.trim(),
    };

    data.push(rowData);
  });

  return data;
};

exportBtn.addEventListener("click", async () => {
  const data = exportData();

  const text = JSON.stringify(data, null, 2);

  await navigator.clipboard.writeText(text);

  alert("Copied to clipboard:", text);
});
