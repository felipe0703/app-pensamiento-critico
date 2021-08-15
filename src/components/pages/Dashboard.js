import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { FirebaseContext } from "../../firebase";
import ExportExcel from "../ui/ExportExcel";
import ExportExcelOld from "../ui/ExportExcel_oldData";

export const Dashboard = () => {
  const { firebase } = useContext(FirebaseContext);
  const [users, setUsers] = useState([]);
  const [logs, setLogs] = useState([]);
  const [oldLogs, setOldLogs] = useState([]);
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [filteredOldLogs, setFilteredOldLogs] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filteredUsersOld, setFilteredUsersOld] = useState([]);
  const [introduction, setIntroduction] = useState([]);
  const [introductionOld, setIntroductionOld] = useState([]);
  const [challenge1, setChallenge1] = useState([]);
  const [challenge1Old, setChallenge1Old] = useState([]);
  const [challenge2, setChallenge2] = useState([]);
  const [challenge2Old, setChallenge2Old] = useState([]);
  const [trivia, setTrivia] = useState([]);
  const [triviaOld, setTriviaOld] = useState([]);
  const [other, setOther] = useState([]);
  const [mergeIntro, setMergeIntro] = useState([]);
  const [mergeIntroOld, setMergeIntroOld] = useState([]);
  const [mergeChallenge1, setMergeChallenge1] = useState([]);
  const [mergeChallenge1Old, setMergeChallenge1Old] = useState([]);
  const [mergeChallenge2, setMergeChallenge2] = useState([]);
  const [mergeChallenge2Old, setMergeChallenge2Old] = useState([]);
  const [mergeTrivia, setmergeTrivia] = useState([]);
  const [mergeTriviaOld, setmergeTriviaOld] = useState([]);
  const [mergeOther, setMergeOther] = useState([]);

  // console.log(introduction);
  // console.log(users);
  // console.log("filterUser", filteredUsers);
  // console.log("filteredLogs", filteredLogs);

  // CUANTOS USUARIOS HAY REGISTRADOS
  useEffect(() => {
    firebase.db
      .collection("users")
      .get()
      .then((response) => {
        const listUsers = response.docs.map((doc) => {
          return doc.data();
        });
        setUsers(listUsers);
      });
  }, [firebase.db]);

  // LISTA DE REGISTROS(LOGS)
  useEffect(() => {
    firebase.db
      .collection("new_logs")
      .get()
      .then((response) => {
        const listLogs = response.docs.map((doc) => {
          return doc.data();
        });
        setLogs(listLogs);
      });
  }, [firebase.db]);

  // LISTA DE REGISTROS(LOGS ANTIGUOS)
  useEffect(() => {
    firebase.db
      .collection("logs")
      .get()
      .then((response) => {
        const listLogs = response.docs.map((doc) => {
          return doc.data();
        });
        setOldLogs(listLogs);
      });
  }, [firebase.db]);

  // FILTRO DE REGISTRO, ELIMINACIÓN DE NULOS Y DATOS DE PRUEBA
  useEffect(() => {
    let filters = logs.filter(
      (log) =>
        log.nameUser !== "test" &&
        log.nameUser !== "test felipe" &&
        log.nameUser !== "felipe test" &&
        log.nameUser !== null
    );
    setFilteredLogs(filters);
  }, [logs]);

  // FILTRO DE REGISTRO ANTIGUOS, ELIMINACIÓN DE NULOS Y DATOS DE PRUEBA
  useEffect(() => {
    let filters = oldLogs.filter(
      (log) =>
        log.email !== "test@gmail.com" &&
        log.email !== "Test@gmail.com" &&
        log.email !== "test2@gmail.com" &&
        log.email !== "test3@gmail.com"
    );
    setFilteredOldLogs(filters);
  }, [oldLogs]);

  // FILTRA LOS USUARIOS QUE USARON ÚLTIMA VERSIÓN
  useEffect(() => {
    filterUsers();
  }, [filteredLogs]);

  // COMPARA EL NUEVO LOG Y LOS USUARIOS REGISTRADO
  // GUARDA LOS USUARIOS QUE USARON LA ÚLTIMA VERSIÓN
  const filterUsers = () => {
    let data = [];
    users.map((user) => {
      const filter = filteredLogs.filter((log) => log.idUser === user.idUser);
      if (filter.length !== 0) {
        data.push(user.email);
      }
    });
    setFilteredUsers(data);
  };

  useEffect(() => {
    filterUsersOld();
  }, [filteredOldLogs]);

  const filterUsersOld = () => {
    let data = [];
    users.map((user) => {
      const filter = filteredOldLogs.filter(
        (log) => log.idUser === user.idUser
      );
      if (filter.length !== 0) {
        data.push(filter[0].email);
      }
    });
    setFilteredUsersOld(data);
  };

  // FILTRO POR DESAFÍO, SEPARO POR DESAFÍO
  useEffect(() => {
    filterChallenge();
  }, [filteredUsers]);

  const filterChallenge = () => {
    let intro = [];
    let chall1 = [];
    let chall2 = [];
    let tri = [];
    let oth = [];
    filteredLogs.map((log) => {
      for (let i = 0; i < log.challenge.length; i++) {
        // console.log(log);
        if (
          log.challenge[i].name === "Introducción" ||
          log.challenge[i].name === "introducción"
        ) {
          const data = {
            idUser: log.idUser,
            challenge: log.challenge[i],
          };
          intro.push(data);
        } else if (
          log.challenge[i].name === "Desafío 1" ||
          log.challenge[i].name === "desafío 1"
        ) {
          const data = {
            idUser: log.idUser,
            challenge: log.challenge[i],
          };
          chall1.push(data);
        } else if (
          log.challenge[i].name === "Desafío 2" ||
          log.challenge[i].name === "desafío 2"
        ) {
          const data = {
            idUser: log.idUser,
            challenge: log.challenge[i],
          };
          chall2.push(data);
        } else if (
          log.challenge[i].name === "Trivia" ||
          log.challenge[i].name === "trivia"
        ) {
          const data = {
            idUser: log.idUser,
            challenge: log.challenge[i],
          };
          tri.push(data);
        } else {
          const data = {
            idUser: log.idUser,
            challenge: log.challenge[i],
          };
          oth.push(data);
        }
      }
    });
    setIntroduction(intro);
    setChallenge1(chall1);
    setChallenge2(chall2);
    setTrivia(tri);
    setOther(oth);
  };

  useEffect(() => {
    filterChallengeOld();
  }, [filteredUsersOld]);

  const filterChallengeOld = () => {
    let intro = [];
    let chall1 = [];
    let chall2 = [];
    let tri = [];
    let oth = [];
    filteredOldLogs.map((log) => {
      if (
        log.challenge === "Introducción" ||
        log.challenge === "introducción"
      ) {
        intro.push(log);
      } else if (
        log.challenge === "Desafío 1" ||
        log.challenge === "desafío 1"
      ) {
        chall1.push(log);
      } else if (
        log.challenge === "Desafío 2" ||
        log.challenge === "desafío 2"
      ) {
        chall2.push(log);
      } else if (log.challenge === "Trivia" || log.challenge === "trivia") {
        tri.push(log);
      }
    });
    setIntroductionOld(intro);
    setChallenge1Old(chall1);
    setChallenge2Old(chall2);
    setTriviaOld(tri);
  };

  // JUNTO LOS DATOS DE USUARIOS CON LOS DATOS DE REGISTRO
  useEffect(() => {
    dataMerge();
  }, [introduction]);

  const dataMerge = () => {
    let data_intro = [];
    let data_chall1 = [];
    let data_chall2 = [];
    let data_trivia = [];
    let data_other = [];

    users.map((user) => {
      // INTRODUCCIÓN
      const filter_intro = introduction.filter(
        (log) => log.idUser === user.idUser
      );
      if (filter_intro.length !== 0) {
        filter_intro.map((log) => {
          const temp = {
            ...user,
            challenge: log.challenge,
          };
          data_intro.push(temp);
        });
      }
      // DESAFÍO 1
      const filter_chall1 = challenge1.filter(
        (log) => log.idUser === user.idUser
      );
      if (filter_chall1.length !== 0) {
        filter_chall1.map((log) => {
          const temp = {
            ...user,
            challenge: log.challenge,
          };
          data_chall1.push(temp);
        });
      }
      // DESAFÍO 2
      const filter_chall2 = challenge2.filter(
        (log) => log.idUser === user.idUser
      );
      if (filter_chall2.length !== 0) {
        filter_chall2.map((log) => {
          const temp = {
            ...user,
            challenge: log.challenge,
          };
          data_chall2.push(temp);
        });
      }
      // TRIVIA
      const filter_trivia = trivia.filter((log) => log.idUser === user.idUser);
      if (filter_trivia.length !== 0) {
        filter_trivia.map((log) => {
          const temp = {
            ...user,
            challenge: log.challenge,
          };
          data_trivia.push(temp);
        });
      }

      // OTROS DATOS
      const filter_other = other.filter((log) => log.idUser === user.idUser);
      if (filter_other.length !== 0) {
        filter_other.map((log) => {
          const temp = {
            ...user,
            challenge: log.challenge,
          };
          data_other.push(temp);
        });
      }
    });

    setMergeIntro(data_intro);
    setMergeChallenge1(data_chall1);
    setMergeChallenge2(data_chall2);
    setmergeTrivia(data_trivia);
    setMergeOther(data_other);
  };

  useEffect(() => {
    dataMergeOld();
  }, [introductionOld]);

  const dataMergeOld = () => {
    let data_intro = [];
    let data_chall1 = [];
    let data_chall2 = [];
    let data_trivia = [];
    let data_other = [];

    users.map((user) => {
      // INTRODUCCIÓN
      const filter_intro = introductionOld.filter(
        (log) => log.idUser === user.idUser
      );
      if (filter_intro.length !== 0) {
        filter_intro.map((log) => {
          const temp = {
            ...user,
            action: log.action,
            challenge: log.challenge,
            context: log.context,
            email: log.email,
            nameUser: log.nameUser,
            time: log.time,
          };
          data_intro.push(temp);
        });
      }

      // DESAFÍO 1
      const filter_chall1 = challenge1Old.filter(
        (log) => log.idUser === user.idUser
      );
      if (filter_chall1.length !== 0) {
        filter_chall1.map((log) => {
          const temp = {
            ...user,
            action: log.action,
            challenge: log.challenge,
            context: log.context,
            email: log.email,
            nameUser: log.nameUser,
            time: log.time,
          };
          data_chall1.push(temp);
        });
      }
      // // DESAFÍO 2
      const filter_chall2 = challenge2Old.filter(
        (log) => log.idUser === user.idUser
      );
      if (filter_chall2.length !== 0) {
        filter_chall2.map((log) => {
          const temp = {
            ...user,
            action: log.action,
            challenge: log.challenge,
            context: log.context,
            email: log.email,
            nameUser: log.nameUser,
            time: log.time,
          };
          data_chall2.push(temp);
        });
      }
      // // TRIVIA
      const filter_trivia = triviaOld.filter(
        (log) => log.idUser === user.idUser
      );
      if (filter_trivia.length !== 0) {
        filter_trivia.map((log) => {
          const temp = {
            ...user,
            action: log.action,
            challenge: log.challenge,
            context: log.context,
            email: log.email,
            nameUser: log.nameUser,
            time: log.time,
          };
          data_trivia.push(temp);
        });
      }
    });
    setMergeIntroOld(data_intro);
    setMergeChallenge1Old(data_chall1);
    setMergeChallenge2Old(data_chall2);
    setmergeTriviaOld(data_trivia);
  };

  return (
    <main>
      <h1 className="text-3xl font-bold text-gray-600 mb-4">Dashboard</h1>
      <section>
        <h2>Datos de usuarios</h2>
        <p>Número de usuarios: {users.length}</p>
      </section>
      <section>
        <h2>Datos registros</h2>
        <p>Números de registros: {filteredLogs.length}</p>
        {mergeChallenge1 && (
          <>
            <ExportExcel
              mergeIntro={mergeIntro}
              mergeChallenge1={mergeChallenge1}
              mergeChallenge2={mergeChallenge2}
              mergeTrivia={mergeTrivia}
              mergeOther={mergeOther}
              users={filteredUsers}
            />
            <ExportExcelOld
              mergeIntro={mergeIntroOld}
              mergeChallenge1={mergeChallenge1Old}
              mergeChallenge2={mergeChallenge2Old}
              mergeTrivia={mergeTriviaOld}
              users={filteredUsersOld}
            />
          </>
        )}
      </section>
      {/* <section className="h-64">
        <Graphics />
      </section> */}
    </main>
  );
};
