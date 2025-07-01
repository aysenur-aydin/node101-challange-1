const allNotes = {
  categories: [
    { name: 'Videos', color: '#ae54a4' },
    { name: 'Wishlist', color: '#a45e12' },
    { name: 'Assignment', color: '#4658a8' },
    { name: 'Projects', color: '#319c8f' },
    { name: 'Work', color: '#b64963' },
    { name: 'Study', color: '#b88a2b' },
  ],
  notes: [
    {
      id: 1,
      title: 'Note 1',
      category: 'Videos',
      content:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in officiis nulla eum asperiores id porro recusandae labore inventore rem, sit doloremque sed dicta harum ratione nesciunt. Vero, odit quos.',
      date: '2023-10-01T02:00:00Z',
    },
    {
      id: 2,
      title: 'Note 2',
      category: 'Wishlist',
      content:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in officiis nulla eum asperiores id porro recusandae labore inventore rem, sit doloremque sed dicta harum ratione nesciunt. Vero, odit quos.',
      date: '2023-10-02T04:00:00Z',
    },
    {
      id: 3,
      title: 'Note 3',
      category: 'Assignment',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in officiis nulla eum asperiores id porro recusandae labore inventore rem, sit doloremque sed dicta harum ratione nesciunt. Vero, odit quos.',
      date: '2023-10-03T06:00:00Z',
    },
    {
      id: 4,
      title: 'Note 4',
      category: 'Projects',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in officiis nulla eum asperiores id porro recusandae labore inventore rem, sit doloremque sed dicta harum ratione nesciunt. Vero, odit quos.',
      date: '2023-10-03T08:00:00Z',
    },
    {
      id: 5,
      title: 'Note 5',
      category: 'Work',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in officiis nulla eum asperiores id porro recusandae labore inventore rem, sit doloremque sed dicta harum ratione nesciunt. Vero, odit quos.',
      date: '2023-10-03T10:00:00Z',
    },
    {
      id: 6,
      title: 'Note 6',
      category: 'Study',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in officiis nulla eum asperiores id porro recusandae labore inventore rem, sit doloremque sed dicta harum ratione nesciunt. Vero, odit quos.',
      date: '2023-10-03T12:00:00Z',
    },
    {
      id: 7,
      title: 'Note 7',
      category: 'Videos',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem in officiis nulla eum asperiores id porro recusandae labore inventore rem, sit doloremque sed dicta harum ratione nesciunt. Vero, odit quos.',
      date: '2023-10-03T12:00:00Z',
    },
  ],
};

allNotes.categories.forEach(({ name, color }) => {
  setCategoryColor(name, color);
});

function setCategoryColor(category, color) {
  document.documentElement.style.setProperty(
    `--color-${category.toLowerCase()}`,
    `${color}`
  );
}

function getCountByCategory(category) {
  return allNotes.notes.filter((note) => note.category === category).length;
}

function renderCategoryList(categories, notes) {
  const navList = document.getElementById('nav-list');
  categories.forEach((category) => {
    const li = document.createElement('li');
    li.setAttribute('data-category', category.name.toLowerCase());
    li.innerHTML = `
      <div class="badge"></div>
      <p class="list-text">${category.name}</p>
      <div class="count-badge">
        <span class="count-text">${String(
          getCountByCategory(category.name)
        ).padStart(2, '0')}</span>
      </div>
    `;
    navList.appendChild(li);
  });
}
renderCategoryList(allNotes.categories, allNotes.notes);

function renderNoteCards(data) {
  const notesContainer = document.getElementById('notes-container');
  data.forEach((note) => {
    const noteCard = document.createElement('div');
    noteCard.className = 'note-card';
    noteCard.setAttribute('data-category', note.category.toLowerCase());
    noteCard.innerHTML = `
      <div class="note-header">
        <h3 class="note-title">${note.title}</h3>
        <div class="note-category">
          <span class="badge"></span>
          <span class="note-category-text">${note.category.toUpperCase()}</span>
        </div>
      </div>
      <p class="note-content">
        ${note.content}
      </p>
      <div class="note-footer">
        <span class="note-time">
       ${new Date(note.date).toLocaleTimeString('en-US', {
         hour: 'numeric',
         minute: 'numeric',
         hour12: true,
       })}
        </span>
        <span class="note-date">${new Date(note.date)
          .toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
          .toUpperCase()}</span>
      </div>
    `;
    notesContainer.prepend(noteCard);
  });
}

renderNoteCards(allNotes.notes);
