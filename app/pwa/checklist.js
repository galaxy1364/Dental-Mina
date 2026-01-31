

(async () => {


  const resp = await fetch('./checklist.json', { cache: 'no-store' });


  const data = await resp.json();


  const key = 'DM_CHECKLIST_V1';


  const saved = JSON.parse(localStorage.getItem(key) || '{}');


  const root = document.getElementById('root');


  root.innerHTML = '';


  for (const it of (data.items || [])) {


    const id = it.id;


    const row = document.createElement('div');


    const cb = document.createElement('input');


    cb.type = 'checkbox';


    cb.checked = !!saved[id];


    cb.addEventListener('change', () => {


      saved[id] = cb.checked;


      localStorage.setItem(key, JSON.stringify(saved));


    });


    const label = document.createElement('span');


    label.textContent = ' ' + it.id + ' - ' + it.title;


    row.appendChild(cb);


    row.appendChild(label);


    root.appendChild(row);


  }


})();

