function json2html(data) {
  // Extract unique column headers from data
  const columns = Array.from(new Set(data.flatMap(Object.keys)));

  // Start building the HTML table
  let html = '<table data-user="rafaymohd00@gmail.com"><thead><tr>';

  // Add column headers
  columns.forEach((col) => {
    html += `<th>${col}</th>`;
  });
  html += "</tr></thead><tbody>";

  // Add table rows
  data.forEach((row) => {
    html += "<tr>";
    columns.forEach((col) => {
      html += `<td>${row[col] !== undefined ? row[col] : ""}</td>`;
    });
    html += "</tr>";
  });

  html += "</tbody></table>";
  return html;
}


console.log(json2html(data));
