const inser=document.getElementById('insert')
window.addEventListener('keydown',(e)=>{
   insert.innerHTML=`
   <div>
        <table >
            <tr>
                <th>Key</th>
                <th>Key code</th>
                <th>code</th>
            </tr>
            <tr>
                <td>${e.key==='' ? 'space ':e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>`;
});