var user = { name: 'luke', age: 2010, open: true, lesson: [{ title: 'linux' }, { title: 'ts' }] };
user.open = false;
user.lesson.push({ title: 'css' });
console.log(user);
