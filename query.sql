create database ClassRoom;

use ClassRoom;

/* Table Coordenadores */
create table Coordenadores (
	idCoordenador int primary key auto_increment,
    Nome varchar(255) not null,
    Sobrenome varchar(255) not null,
    Email varchar(255) not null,
    Password varchar(255) not null
);

/* Table Turma */
create table Turmas (
	idTurma int auto_increment primary key,
    Grau int not null,
    Turma_Name varchar(5),
    idCoordenador int not null, /* Connect with coordenadores - Already did */
    Aluno_Rm_Alunos int not null, /* Connect with alunos - Already did*/
    foreign key (idCoordenador) references Coordenadores(idCoordenador),
    foreign key (Alunos_Rm_Aluno) references Alunos(Rm_Aluno)
);

/* Table Turmas_Materias_Professores */
create table Turmas_Materias_Professores(
	idTurmas_Materias_Professores int auto_increment primary key,
    Materias_idMaterias int not null, /* Connect with materia - Already did */
    Professores_idProfessor int not null, /* Connect with professor - Already did */
    Turmas_idTurmas int not null, /* Connect with turma - Already did */
    Cronograma varchar(255) not null, 
    Minutos_Semana int not null,
    foreign key (Turmas_idTurmas) references Turmas(idTurma),
    foreign key (Professores_idProfessor) references Professores(idProfessor),
    foreign key (Materias_idMaterias) references Materias(idMaterias)
);

/* Table Professores */
create table Professores (
	idProfessor int not null auto_increment primary key,
    Nome varchar(255) not null,
    Sobrenome varchar(255) not null,
    Email varchar(255) not null,
    Password varchar(255) not null
);

/* Table Tarefas */
create table Tarefas (
	idTarefa int primary key auto_increment not null,
    idTurmas_Materias_Professores int not null, /* Connect with turma_materias_professores - Already did */
    Data_create datetime,
    Prazo datetime, 
	Nome_Tarefa varchar(255) not null,
    Descricao text,
	foreign key (idTurmas_Materias_Professores) references Turmas_Materias_Professores(idTurmas_Materias_Professores)
);

/* Table Materias */
create table Materias (
	idMaterias int not null auto_increment primary key, 
    Nome_Materia varchar(255) not null
);

/* Table TarefasXAlunos */
create table TarefasXAlunos (
	Tarefas_idTarefa int not null, /* Connect with tarefas - Already did */
    Tarefas_Turmas_Materias_Professores int not null, /* Connect with Turmas_Materias_Professores - Already did */
    Alunos_Rm_Aluno int not null,  /* Connect with alunos - Alraedy did */
    Situacao varchar(255) not null,
    foreign key (Alunos_Rm_Aluno) references alunos(Rm_Aluno),
    foreign key (Tarefas_idTarefa) references Tarefas(idTarefa),
    foreign key (Tarefas_Turmas_Materias_Professores) references Turmas_Materias_Professores(idTurmas_Materias_Professores)
);

/* Table Alunos */
create table Alunos (
	Rm_Aluno int not null auto_increment primary key, 
    Nome varchar(255) not null, 
    Sobrenome varchar(255) not null,
    Email varchar(255) not null,
    Password varchar(255) not null,
    idTurma int not null, /* Connect with turmas - Already did */
    foreign key (idTurma) references Turmas(idTurma)
);

/* Table Alunos_has_Responsavel */
create table Alunos_has_Responsavel (
	Alunos_Rm_Aluno int not null, /* Connect with alunos - Alrady did */
    Responsavel_idResponsavel int not null, /* Connect with responsavel */
    foreign key (Alunos_Rm_Aluno) references alunos(Rm_Aluno)
);

/* Table Responsavel */
create table Responsavel (
	idResponsavel int not null primary key,
    Nome varchar(255) not null,
    Sobrenome varchar(255) not null,
    Email varchar(255) not null,
    Password varchar(255) not null,
    Telefone varchar(45) not null
);