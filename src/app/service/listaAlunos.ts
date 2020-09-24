import { of } from 'rxjs'
import { Aluno } from '../model/aluno'

export const LISTAALUNOS = of(
    new Aluno(
        1,
        42,
        897413,
        "Clinica Medica",
        "2008 MEDCURSO SALVADOR - turma A/2008 MED SALVADOR",
        "Salvador(BA)"
    ),
    new Aluno(
        2,
        40,
        745133,
        "Cirurgia Geral",
        "2008 MEDCURSO São Paulo - turma A/2008 MED São Paulo",
        "São Paulo(SP)"
    ),
    new Aluno(
        2,
        40,
        897413,
        "Clinica Medica",
        "2008 MEDCURSO SALVADOR - turma A/2008 MED SALVADOR",
        "Salvador(BA)"
    ),
    new Aluno(
        3,
        39,
        745133,
        "Cirurgia Geral",
        "2008 MEDCURSO São Paulo - turma A/2008 MED São Paulo",
        "São Paulo(SP)"
    ),
    new Aluno(
        4,
        38,
        897413,
        "Clinica Medica",
        "2008 MEDCURSO SALVADOR - turma A/2008 MED SALVADOR",
        "Salvador(BA)"
    ),
    new Aluno(
        4,
        38,
        745133,
        "Cirurgia Geral",
        "2008 MEDCURSO São Paulo - turma A/2008 MED São Paulo",
        "São Paulo(SP)"
    )
);