const BASE_URL_STUDENT = 'http://localhost:8090/api/student';

export async function getStudents() {
  try {
    const res = await fetch(`${BASE_URL_STUDENT}/all`);
    return await res.json();
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function createStudent(student) {
  try {
    const res = await fetch(`${BASE_URL_STUDENT}/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    });
    return await res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function updateStudent(id, student) {
  try {
    const res = await fetch(`${BASE_URL_STUDENT}/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(student)
    });
    return await res.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function deleteStudent(id) {
  try {
    await fetch(`${BASE_URL_STUDENT}/delete/${id}`, { method: 'DELETE' });
    return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}
