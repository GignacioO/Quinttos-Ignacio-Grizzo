document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // BASE DE DATOS DE USUARIOS
    // =========================================
    const usuarios = {
        // Profesores
        'profesor1': { tipo: 'profesor', carrera: 'instrumentacion', password: 'profesor' },
        'profesor2': { tipo: 'profesor', carrera: 'administracion', password: 'profesor' },
        'profesor3': { tipo: 'profesor', carrera: 'enfermeria', password: 'profesor' },
        'profesor4': { tipo: 'profesor', carrera: 'diseno', password: 'profesor' },
        // Alumnos (vinculados a su profesor/carrera)
        'alumno1': { tipo: 'alumno', carrera: 'instrumentacion', password: 'alumno', profesor: 'profesor1' },
        'alumno2': { tipo: 'alumno', carrera: 'administracion', password: 'alumno', profesor: 'profesor2' },
        'alumno3': { tipo: 'alumno', carrera: 'enfermeria', password: 'alumno', profesor: 'profesor3' },
        'alumno4': { tipo: 'alumno', carrera: 'diseno', password: 'alumno', profesor: 'profesor4' },
    };

    // =========================================
    // INFORMACIÓN DE CARRERAS
    // =========================================
    const carreras = {
        'instrumentacion': {
            nombre: 'Instrumentación Quirúrgica',
            alias: 'instrumentacion',
            bannerImg: 'banner-instrumentacion.jpg',
            materias: [
                { icon: '⚕️', nombre: 'Primeros Auxilios', prof: 'Prof. Mariel', aula: 'Lab 1' },
                { icon: '🩺', nombre: 'Química biológica', prof: 'Prof. Mariel', aula: 'Lab 2' },
                { icon: '🧬', nombre: 'Inglés técnico', prof: 'Prof. Grizzo', aula: 'Aula 3' },
            ],
            novedades: [
                { icon: '🗒️', titulo: 'Examen práctico', desc: '15/10/2026 - Laboratorio', fecha: 'Faltan 17 días' },
                { icon: '🏥', titulo: 'Rotación hospitalaria', desc: 'Inicio: 01/09/2026', fecha: 'Hace 27 días' },
            ],
            eventos: [
                { icon: '🧪', titulo: 'Instrumentación Quirúrgica I', desc: '28/09 - 18:00 hs - Lab 1' },
                { icon: '📅', titulo: 'Clase práctica', desc: '30/09 - 14:00 hs - Lab 1' },
                
            ],
            proximoEvento: 'Instrumentación Quirúrgica I - 28/09 - 18:00 hs - Lab 1'
        },
        'administracion': {
            nombre: 'Administración de Empresas',
            alias: 'administracion',
            bannerImg: 'banner-administracion.jpg',
            materias: [
                { icon: '💼', nombre: 'Administración General', prof: 'Prof. Gonzalez', aula: 'Aula 2' },
                { icon: '📊', nombre: 'Contabilidad Básica', prof: 'Prof. Vazquez', aula: 'Aula 4' },
                { icon: '📈', nombre: 'Economía', prof: 'Prof. Grizzo', aula: 'Aula 1' },
            ],
            novedades: [
                { icon: '✍🏻', titulo: 'Trabajo práctico grupal', desc: 'Entrega: 30/09/2026', fecha: 'Faltan 2 días' },
                { icon: '💼', titulo: 'Charla: Emprendedurismo', desc: '10/11/2026 - Auditorio', fecha: 'Falta 1 mes' },
            ],
            eventos: [
                { icon: '📅', titulo: 'Administración General', desc: '28/09 - 19:00 hs - Aula 2' },
                { icon: '📖', titulo: 'Taller de Excel', desc: '05/10 - 16:00 hs - Lab 3' },
            ],
            proximoEvento: 'Administración General- 28/09 - 19:00 hs - Aula 2'
        },
        'enfermeria': {
            nombre: 'Enfermería',
            alias: 'enfermeria',
            bannerImg: 'banner-enfermeria.jpg',
            materias: [
                { icon: '⚕️', nombre: 'Fundamentos de Enfermería', prof: 'Prof. Mariel', aula: 'Lab 1' },
                { icon: '💊', nombre: 'Farmacología', prof: 'Prof. Mariel', aula: 'Aula 3' },
                { icon: '🩹', nombre: 'Prácticas Clínicas', prof: 'Prof. Quispe', aula: 'Hospital' },
            ],
            novedades: [
                { icon: '🏥', titulo: 'Práctica en hospital', desc: '20/10 - Hospital Municipal', fecha: 'Falta 1 mes' },
                { icon: '💉', titulo: 'Vacunación obligatoria', desc: 'Presentar certificado antes del 15/10/2026', fecha: 'Faltan 12 días' },
            ],
            eventos: [
                { icon: '📅', titulo: 'Fundamentos de Enfermería', desc: '29/09 - 10:00 hs - Lab 1' },
                { icon: '🩺', titulo: 'Simulación clínica', desc: '06/10 - 14:00 hs - Lab 2' },
            ],
            proximoEvento: 'Fundamentos de Enfermería - 29/09 - 10:00 hs - Lab 1'
        },
        'diseno': {
            nombre: 'Diseño y Programación Web',
            alias: 'diseno',
            bannerImg: 'banner-diseño.png',
            materias: [
                { icon: '💻', nombre: 'Programación 1', prof: 'Prof. Cruz', aula: 'Lab 2' },
                { icon: '🎨', nombre: 'Diseño vectorial', prof: 'Prof. Morel', aula: 'Lab 1' },
                { icon: '🌐', nombre: 'Marketing digital', prof: 'Prof. Grizzo', aula: 'Lab 2' },
            ],
            novedades: [
                { icon: '💻', titulo: 'Proyecto final', desc: 'Entrega: 27/11', fecha: 'Falta 1 mes' },
                { icon: '💻', titulo: 'Nerdearla', desc: '24/09 - 120hs', fecha: 'Hace 1 semana' },
            ],
            eventos: [
                { icon: '📅', titulo: 'Diseño gráfico para web', desc: ' 29/09 - 17:30 hs - Lab 2' },
                { icon: '🎨', titulo: 'Taller de Miro', desc: '29/09 - 19:30 hs - Lab 1' },
            ],
            proximoEvento: 'Diseño gráfico para web - 29/09 - 17:30 hs - Lab 2'
        }
    };

    // =========================================
    // ESTADO DE LA SESIÓN
    // =========================================
    let sesionActual = null; // { tipo, username, carrera }

    // Pantalla a la que hay que ir DESPUÉS de la bienvenida
    // (se completa justo antes de mostrar "welcome" / "welcome-visita")
    let destinoTrasBienvenida = null;

    // =========================================
    // NAVEGACIÓN
    // =========================================
    function navigateTo(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const target = document.getElementById(screenId);
        if (target) {
            target.classList.add('active');
            updateBottomNav(screenId);
            window.scrollTo(0, 0);
        }
    }

    function updateBottomNav(activeScreenId) {
        const activeScreen = document.getElementById(activeScreenId);
        if (!activeScreen) return;
        const bottomNav = activeScreen.querySelector('.bottom-nav');
        if (!bottomNav) return;
        bottomNav.querySelectorAll('.nav-item').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-target') === activeScreenId);
        });
    }

    // =========================================
    // APLICAR TEMA DE CARRERA AL FRAME
    // Agrega una clase al .mobile-frame para que
    // el CSS específico de carrera funcione.
    // =========================================
    function aplicarTemaCarrera(carrera) {
        const frame = document.getElementById('app-frame');
        // Remover clases de carreras previas
        frame.classList.remove('carrera-instrumentacion', 'carrera-administracion', 'carrera-enfermeria', 'carrera-diseno');
        if (carrera) {
            frame.classList.add('carrera-' + carrera);
        }
    }

    // =========================================
    // MOSTRAR/OCULTAR BANNER MODO VISITA
    // =========================================
    function setModoVisita(activo) {
        document.getElementById('banner-visita').style.display = activo ? 'block' : 'none';
    }

    // =========================================
    // ACTUALIZAR NAV INFERIOR DE "profile-profesor"
    // Esta pantalla es UNA sola, compartida por los 4 profesores,
    // así que sus botones "Inicio/Materias/Notas" tienen que apuntar
    // a home-profesorN/subjects-profN/grades-profN según quién esté
    // logueado en este momento (si no, siempre vuelven al profesor1).
    // =========================================
    function actualizarNavPerfilProfesor(num) {
        const nav = document.querySelector('#profile-profesor .bottom-nav');
        if (!nav) return;
        const botones = nav.querySelectorAll('.nav-item');
        // botones[0] = Inicio, [1] = Materias, [2] = Notas, [3] = Perfil (no cambia)
        if (botones[0]) botones[0].setAttribute('data-target', 'home-profesor' + num);
        if (botones[1]) botones[1].setAttribute('data-target', 'subjects-prof' + num);
        if (botones[2]) botones[2].setAttribute('data-target', 'grades-prof' + num);
    }

    // =========================================
    // BIENVENIDA (se muestra 1 sola vez)
    // - claveStorage: a quién ya se le mostró (una clave distinta
    //   por usuario, así cada alumno/profesor la ve la primera vez
    //   que entra a SU cuenta; y una clave aparte para "visita")
    // - pantallaBienvenida: "welcome" (alumno/profesor) o
    //   "welcome-visita" (invitado)
    // - pantallaDestino: adónde ir después (o directo, si ya se
    //   había mostrado antes)
    // =========================================
    function irConBienvenida(claveStorage, pantallaBienvenida, pantallaDestino) {
        const yaVista = localStorage.getItem(claveStorage);
        if (yaVista) {
            navigateTo(pantallaDestino);
        } else {
            localStorage.setItem(claveStorage, 'true');
            destinoTrasBienvenida = pantallaDestino;
            navigateTo(pantallaBienvenida);
        }
    }

    // =========================================
    // POBLAR PANTALLAS DE ALUMNO SEGÚN CARRERA
    // =========================================
    function poblarPantallasAlumno(carreraKey) {
        const carrera = carreras[carreraKey];
        if (!carrera) return;

        // Saludo y nombre de carrera
        document.getElementById('alumno-saludo').textContent = 'Hola, Alumno!';
        document.getElementById('alumno-nombre-carrera').textContent = carrera.nombre;

        // Banner de imagen: misma pantalla para las 4 carreras, así que
        // la imagen (y el encuadre "img-top" que usa Diseño) se arma acá
        const bannerImg = document.getElementById('alumno-banner-img');
        if (bannerImg) {
            bannerImg.src = carrera.bannerImg;
            bannerImg.alt = carrera.nombre;
            bannerImg.classList.toggle('img-top', carreraKey === 'diseno');
        }
        document.getElementById('alumno-proximo-evento').textContent = carrera.proximoEvento;
        document.getElementById('alumno-nombre-perfil').textContent = 'Alumno';
        document.getElementById('alumno-carrera-perfil').textContent = carrera.nombre;

        // Lista de materias
        const listaMaterias = document.getElementById('alumno-lista-materias');
        listaMaterias.innerHTML = carrera.materias.map(m => `
            <button class="list-item" data-target="subject-detail" data-materia="${m.nombre}">
                <span class="list-icon">${m.icon}</span>
                <div class="text">
                    <strong>${m.nombre}</strong>
                    <small>${m.prof} - ${m.aula}</small>
                </div>
            </button>
        `).join('');

        // Lista de novedades (SOLO LECTURA - sin botón agregar)
        const listaNovedades = document.getElementById('alumno-lista-novedades');
        listaNovedades.innerHTML = carrera.novedades.map(n => `
            <div class="news-item">
                <div class="news-icon">${n.icon}</div>
                <div class="news-content">
                    <h4>${n.titulo}</h4>
                    <p>${n.desc}</p>
                    <span class="news-date">${n.fecha}</span>
                </div>
            </div>
        `).join('');

        // Lista de eventos del calendario
        const listaEventos = document.getElementById('alumno-lista-eventos');
        listaEventos.innerHTML = `
            <h4>Próximos eventos</h4>
            ${carrera.eventos.map(e => `
                <div class="event-item">
                    <div class="event-icon">${e.icon}</div>
                    <div class="event-content">
                        <strong>${e.titulo}</strong>
                        <small>${e.desc}</small>
                    </div>
                </div>
            `).join('')}
        `;

        // Aplicar tema de carrera al frame
        aplicarTemaCarrera(carreraKey);
    }

    // =========================================
    // LOGIN
    // =========================================
    document.getElementById('form-login').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim().toLowerCase();
        const password = document.getElementById('password').value.trim();
        const errorMsg = document.getElementById('error-message');

        errorMsg.style.display = 'none';
        errorMsg.textContent = '';

        const usuario = usuarios[username];

        if (usuario) {
            // Usuario conocido (profesor o alumno)
            if (usuario.password === password) {
                sesionActual = { tipo: usuario.tipo, username, carrera: usuario.carrera };
                aplicarTemaCarrera(usuario.carrera);
                setModoVisita(false);

                if (usuario.tipo === 'profesor') {
                    // Actualizar perfil
                    document.getElementById('profesor-nombre-perfil').textContent = username;
                    document.getElementById('profesor-carrera-perfil').textContent = carreras[usuario.carrera].nombre;

                    // Redirigir al home específico del profesor,
                    // pasando primero por la bienvenida (solo la 1ª vez)
                    const num = username.replace('profesor', '');
                    actualizarNavPerfilProfesor(num);
                    irConBienvenida('bienvenidaVista_' + username, 'welcome', 'home-profesor' + num);
                } else if (usuario.tipo === 'alumno') {
                    // Poblar pantallas de alumno con datos de su carrera
                    poblarPantallasAlumno(usuario.carrera);

                    // Bienvenida solo la 1ª vez que este alumno inicia sesión
                    irConBienvenida('bienvenidaVista_' + username, 'welcome', 'home-alumno');
                }
            } else {
                // Contraseña incorrecta para usuario conocido
                errorMsg.textContent = '❌ Contraseña incorrecta. Intentá nuevamente.';
                errorMsg.style.display = 'block';
            }
        } else {
            // Usuario desconocido → MODO VISITA
            sesionActual = { tipo: 'visita', username: 'visitante', carrera: null };
            aplicarTemaCarrera(null);
            setModoVisita(true);

            // Bienvenida propia del invitado (distinta de la de alumno/profesor),
            // solo la 1ª vez en este navegador
            irConBienvenida('bienvenidaVista_visita', 'welcome-visita', 'home-visita');
        }
    });

    // =========================================
    // NAVEGACIÓN INFERIOR
    // =========================================
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = btn.getAttribute('data-target');

            // En modo visita, solo permitir ciertas pantallas
            if (sesionActual && sesionActual.tipo === 'visita') {
                const permitidas = ['home-visita', 'welcome', 'welcome-visita', 'login'];
                if (!permitidas.includes(target)) {
                    alert('🔒 En modo visita no podés acceder a esta sección. Iniciá sesión para ver el contenido.');
                    return;
                }
            }

            navigateTo(target);
        });
    });

    // =========================================
    // BOTONES INTERNOS CON DATA-TARGET
    // =========================================
    document.querySelectorAll('[data-target]').forEach(btn => {
        if (!btn.classList.contains('nav-item')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const target = btn.getAttribute('data-target');
                const permitidasEnVisita = ['welcome', 'welcome-visita', 'home-visita', 'login'];

                if (sesionActual && sesionActual.tipo === 'visita' && !permitidasEnVisita.includes(target)) {
                    alert('🔒 En modo visita no podés acceder a esta sección.');
                    return;
                }

                // Si es un botón de materia, cargar detalle
                if (btn.dataset.materia) {
                    document.getElementById('detail-nombre').textContent = btn.dataset.materia;
                }

                navigateTo(target);
            });
        }
    });

    // =========================================
    // BOTONES DE RETROCESO
    // =========================================
    document.querySelectorAll('.btn-back, [data-back]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const target = btn.getAttribute('data-back') || btn.id.replace('btn-back-', '');
            // Mapeo de IDs de botón a pantallas
            const map = {
                'btn-back-subjects': 'subjects-alumno',
                'home-profesor1': 'home-profesor1',
                'home-profesor2': 'home-profesor2',
                'home-profesor3': 'home-profesor3',
                'home-profesor4': 'home-profesor4',
            };
            navigateTo(map[target] || target);
        });
    });

    // =========================================
    // BOTONES ESPECÍFICOS
    // =========================================
    document.getElementById('btn-siguiente').addEventListener('click', () => {
        if (destinoTrasBienvenida) {
            navigateTo(destinoTrasBienvenida);
            destinoTrasBienvenida = null;
        } else {
            // Si alguien llega acá sin sesión (ej: refrescó la página), a login
            navigateTo('login');
        }
    });

    const btnSiguienteVisita = document.getElementById('btn-siguiente-visita');
    if (btnSiguienteVisita) {
        btnSiguienteVisita.addEventListener('click', () => {
            if (destinoTrasBienvenida) {
                navigateTo(destinoTrasBienvenida);
                destinoTrasBienvenida = null;
            } else {
                navigateTo('home-visita');
            }
        });
    }

    document.getElementById('btn-ir-login').addEventListener('click', () => navigateTo('login'));

    document.getElementById('btn-generar-comprobante').addEventListener('click', () => {
        if (sesionActual && sesionActual.tipo === 'visita') {
            alert('🔒 Iniciá sesión para generar comprobantes.');
            return;
        }
        alert('✅ Comprobante generado exitosamente');
    });

    // Cerrar sesión alumno
    document.getElementById('btn-logout-alumno').addEventListener('click', () => {
        if (confirm('¿Cerrar sesión?')) {
            sesionActual = null;
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            setModoVisita(false);
            aplicarTemaCarrera(null);
            navigateTo('login');
        }
    });

    // Cerrar sesión profesor
    document.getElementById('btn-logout-profesor').addEventListener('click', () => {
        if (confirm('¿Cerrar sesión?')) {
            sesionActual = null;
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
            setModoVisita(false);
            aplicarTemaCarrera(null);
            navigateTo('login');
        }
    });

    // =========================================
    // FORMULARIOS DE NOTAS (solo profesores)
    // =========================================
    document.querySelectorAll('.form-grades').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (sesionActual && sesionActual.tipo !== 'profesor') {
                alert('🔒 Solo los profesores pueden cargar notas.');
                return;
            }
            alert('✅ Notas guardadas exitosamente');
        });
    });

    // =========================================
    // BOTÓN AGREGAR NOVEDAD (solo profesores)
    // =========================================
    document.querySelectorAll('.btn-agregar-novedad').forEach(btn => {
        btn.addEventListener('click', () => {
            if (sesionActual && sesionActual.tipo !== 'profesor') {
                alert('🔒 Solo los profesores pueden agregar novedades.');
                return;
            }
            alert('📝 Función "Agregar Novedad" - En desarrollo');
        });
    });

    // =========================================
    // TABS DE FILTRO (simulación visual)
    // =========================================
    document.querySelectorAll('.filter-tabs').forEach(group => {
        group.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                group.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    });

    document.querySelectorAll('.calendar-view-tabs').forEach(group => {
        group.querySelectorAll('.view-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                group.querySelectorAll('.view-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    });

    document.querySelectorAll('.tabs').forEach(group => {
        group.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                group.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    });
});