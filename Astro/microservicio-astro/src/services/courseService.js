const BASE_URL = 'http://localhost:9090/api/course';

export async function getCourses() {
  try {
    const res = await fetch(BASE_URL);
    return await res.json();
  } catch (e) {
    console.error('Error al obtener cursos:', e);
    return [];
  }
}

export async function createCourse(course) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(course)
    });
    return await res.json();
  } catch (e) {
    console.error('Error al crear curso:', e);
    return null;
  }
}

export async function updateCourse(id, course) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(course)
    });
    return await res.json();
  } catch (e) {
    console.error('Error al actualizar curso:', e);
    return null;
  }
}

export async function deleteCourse(id) {
  try {
    await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    return true;
  } catch (e) {
    console.error('Error al eliminar curso:', e);
    return false;
  }
}
