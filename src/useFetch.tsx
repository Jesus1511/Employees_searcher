
export const useFetch = () => {

    const employes = [
        { id: 1, work:"designer", name: 'Juan', apellido: 'Perez', años_de_experiencia: 5, especialización: 'UI/UX Design' },
        { id: 2, work:"designer", name: 'Maria', apellido: 'Garcia', años_de_experiencia: 8, especialización: 'Graphic Design' },
        { id: 3, work:"designer", name: 'Pedro', apellido: 'Martinez', años_de_experiencia: 3, especialización: 'Web Design' },
        { id: 4, work:"designer", name: 'Ana', apellido: 'Lopez', años_de_experiencia: 6, especialización: 'Product Design' },
        { id: 5, work:"designer", name: 'Sofia', apellido: 'Rodriguez', años_de_experiencia: 7, especialización: 'Motion Graphics' },
        { id: 6, work:"designer", name: 'Diego', apellido: 'Hernandez', años_de_experiencia: 4, especialización: 'Illustration' },
        { id: 7, work:"designer", name: 'Laura', apellido: 'Diaz', años_de_experiencia: 2, especialización: 'Brand Identity' },
        { id: 8, work:"designer", name: 'Carlos', apellido: 'Sanchez', años_de_experiencia: 9, especialización: 'Interaction Design' },

        { id: 9,  work:"developer", name: 'Luis', apellido: 'Gonzalez', años_de_experiencia: 7, especialización: 'Frontend Development' },
        { id: 10, work:"developer", name: 'Ana', apellido: 'Romero', años_de_experiencia: 5, especialización: 'Backend Development' },
        { id: 11, work:"developer", name: 'Pablo', apellido: 'Perez', años_de_experiencia: 3, especialización: 'Full Stack Development' },
        { id: 12, work:"developer", name: 'Elena', apellido: 'Fernandez', años_de_experiencia: 6, especialización: 'Mobile App Development' },
        { id: 13, work:"developer", name: 'Marcos', apellido: 'Ruiz', años_de_experiencia: 8, especialización: 'DevOps' },
        { id: 14, work:"developer", name: 'Carmen', apellido: 'Gomez', años_de_experiencia: 4, especialización: 'Game Development' },
        { id: 15, work:"developer", name: 'Antonio', apellido: 'Martinez', años_de_experiencia: 2, especialización: 'Software Engineering' },
        { id: 16, work:"developer", name: 'Isabel', apellido: 'Diaz', años_de_experiencia: 9, especialización: 'Cloud Computing' },

        { id: 17, work:"marketing", name: 'Marta', apellido: 'Hernandez', años_de_experiencia: 5, especialización: 'Digital Marketing' },
        { id: 18, work:"marketing", name: 'Javier', apellido: 'Lopez', años_de_experiencia: 8, especialización: 'Content Marketing' },
        { id: 19, work:"marketing", name: 'Rocio', apellido: 'Garcia', años_de_experiencia: 3, especialización: 'Social Media Marketing' },
        { id: 20, work:"marketing", name: 'Daniel', apellido: 'Rodriguez', años_de_experiencia: 6, especialización: 'SEO' },
        { id: 21, work:"marketing", name: 'Sara', apellido: 'Martinez', años_de_experiencia: 7, especialización: 'Email Marketing' },
        { id: 22, work:"marketing", name: 'Jose', apellido: 'Perez', años_de_experiencia: 4, especialización: 'Influencer Marketing' },
        { id: 23, work:"marketing", name: 'Eva', apellido: 'Sanchez', años_de_experiencia: 2, especialización: 'Brand Management' },
        { id: 24, work:"marketing", name: 'Alberto', apellido: 'Gomez', años_de_experiencia: 9, especialización: 'Marketing Analytics' }
      ];

    return [employes]
}