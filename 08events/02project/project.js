const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    console.log(e);  // Check if the event is properly logged in the console
    insert.innerHTML = `
    <div class='color'>
        <table border="1">
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key || 'N/A'}</td>
                <td>${e.keyCode || 'N/A'}</td>
                <td>${e.code || 'N/A'}</td>
            </tr>
        </table>
    </div>`;
});
