import React, { useEffect, useState } from "react";
import ReactExport from "react-export-excel";
import { questions } from "../Questions";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function ExportExcel({
  mergeIntro,
  mergeChallenge1,
  mergeChallenge2,
  mergeTrivia,
  users,
}) {
  const [dataUsers, setDataUsers] = useState([]);
  // const [dataUsersIntro, setDataUsersIntro] = useState([]);
  const [dataUsers2, setDataUsers2] = useState([]);
  const [challenge1, setChallenge1] = useState([]);
  const [challenge2, setChallenge2] = useState([]);
  const [newTrivia, setNewTrivia] = useState([]);

  // console.log(dataUsersIntro);

  // SEPARO LOS DATOS DE LOS USUARIOS
  useEffect(() => {
    let data = [];
    let data2 = [];
    let data3 = [];
    users.map((user) => {
      let temp = [];
      let temp2 = [];
      let temp3 = [];

      mergeIntro.map((chall) => {
        if (chall.email === user) {
          temp.push(chall);
        }
        return temp;
      });
      data.push(temp);

      mergeChallenge1.map((chall) => {
        if (chall.email === user) {
          temp2.push(chall);
        }
        return temp2;
      });
      data2.push(temp2);

      mergeChallenge2.map((chall) => {
        if (chall.email === user) {
          temp3.push(chall);
        }
        return temp3;
      });
      data3.push(temp3);
      return data;
    });
    setDataUsers(data2);
    setDataUsers2(data3);
    // setDataUsersIntro(data);
  }, [users, mergeChallenge1, mergeChallenge2, mergeIntro]);

  useEffect(() => {
    let data = [];
    mergeTrivia.map((trivia) => {
      let temp = {};
      const result = questions.filter(
        (question) => question.question === trivia.context
      );

      if (result.length !== 0) {
        if (result[0].response === trivia.action) {
          temp = {
            action: "correcto",
            challenge: trivia.challenge,
            consent: trivia.consent,
            context: trivia.context,
            email: trivia.context,
            idUser: trivia.idUser,
            nameUser: trivia.nameUser,
            time: trivia.time,
          };
        } else {
          temp = {
            action: "incorrecto",
            challenge: trivia.challenge,
            consent: trivia.consent,
            context: trivia.context,
            email: trivia.context,
            idUser: trivia.idUser,
            nameUser: trivia.nameUser,
            time: trivia.time,
          };
        }
        data.push(temp);
      }
      return data;
    });
    setNewTrivia(data);
  }, [mergeTrivia]);

  // SE FORMATEA LA INFORMACIÓN POR COLUMNA
  // INTRODUCCIÒN
  useEffect(() => {
    let data = [];
    dataUsers.map((user) => {
      // const thesis = user.filter(
      //   (ele) => ele.context === "Tesis" || ele.context === "tesis"
      // );
      // const all_arguments = user.filter(
      //   (ele) => ele.context === "Argumentos" || ele.context === "argumentos"
      // );

      const temp = {
        idUser: user[0] ? user[0].idUser : "",
        name: user[0] ? user[0].nameUser : "",
        email: user[0] ? user[0].email : "",
      };

      data.push(temp);
      return data;
    });
    // console.log(data);
    // setChallenge1(data);
  }, [mergeIntro, dataUsers]);

  // DESAFÍO 1
  useEffect(() => {
    let data = [];
    dataUsers.map((user) => {
      const thesis = user.filter(
        (ele) => ele.context === "Tesis" || ele.context === "tesis"
      );
      const all_arguments = user.filter(
        (ele) => ele.context === "Argumentos" || ele.context === "argumentos"
      );
      const counter_arguments = user.filter(
        (ele) =>
          ele.context === "Contra-argumentos" ||
          ele.context === "contra-argumentos"
      );
      const conclusion = user.filter(
        (ele) => ele.context === "Conclusión" || ele.context === "conclusión"
      );

      const temp = {
        idUser: user[0] ? user[0].idUser : "",
        name: user[0] ? user[0].nameUser : "",
        email: user[0] ? user[0].email : "",

        thesis: thesis[0] ? thesis[0].action : "",
        argument_1: all_arguments[0]?.action[0]?.argument
          ? all_arguments[0].action[0].argument
          : "",
        argument_2: all_arguments[0]?.action[1]?.argument
          ? all_arguments[0].action[1].argument
          : "",
        argument_3: all_arguments[0]?.action[2]?.argument
          ? all_arguments[0].action[2].argument
          : "",
        argument_4: all_arguments[0]?.action[3]?.argument
          ? all_arguments[0].action[3].argument
          : "",
        argument_5: all_arguments[0]?.action[4]?.argument
          ? all_arguments[0].action[4].argument
          : "",
        argument_6: all_arguments[0]?.action[5]?.argument
          ? all_arguments[0].action[5].argument
          : "",
        argument_7: all_arguments[0]?.action[6]?.argument
          ? all_arguments[0].action[6].argument
          : "",
        counter_argument_1: counter_arguments[0]?.action[0]?.argument
          ? counter_arguments[0].action[0].argument
          : "",
        counter_argument_2: counter_arguments[0]?.action[1]?.argument
          ? counter_arguments[0].action[1].argument
          : "",
        counter_argument_3: counter_arguments[0]?.action[2]?.argument
          ? counter_arguments[0].action[2].argument
          : "",
        counter_argument_4: counter_arguments[0]?.action[3]?.argument
          ? counter_arguments[0].action[3].argument
          : "",
        counter_argument_5: counter_arguments[0]?.action[4]?.argument
          ? counter_arguments[0].action[4].argument
          : "",
        counter_argument_6: counter_arguments[0]?.action[5]?.argument
          ? counter_arguments[0].action[5].argument
          : "",
        counter_argument_7: counter_arguments[0]?.action[6]?.argument
          ? counter_arguments[0].action[6].argument
          : "",
        conclusion: conclusion[0] ? conclusion[0].action : "",
      };

      data.push(temp);
      return data;
    });
    setChallenge1(data);
  }, [dataUsers]);

  // DESAFÍO 2
  useEffect(() => {
    let data = [];
    dataUsers2.map((user) => {
      const url = user.filter(
        (ele) => ele.context === "Selección" || ele.context === "selección"
      );
      const thesis = user.filter(
        (ele) => ele.context === "Tesis" || ele.context === "tesis"
      );
      const all_arguments = user.filter(
        (ele) => ele.context === "Argumentos" || ele.context === "argumentos"
      );
      const counter_arguments = user.filter(
        (ele) =>
          ele.context === "Contra-argumentos" ||
          ele.context === "contra-argumentos"
      );
      const conclusion = user.filter(
        (ele) => ele.context === "Conclusión" || ele.context === "conclusión"
      );

      const temp = {
        idUser: user[0] ? user[0].idUser : "",
        name: user[0] ? user[0].nameUser : "",
        email: user[0] ? user[0].email : "",

        url_1: url[0]?.action[0]?.url ? url[0].action[0].url : "",
        url_2: url[0]?.action[1]?.url ? url[0].action[1].url : "",
        url_3: url[0]?.action[2]?.url ? url[0].action[2].url : "",

        thesis: thesis[0] ? thesis[0].action : "",
        argument_1: all_arguments[0]?.action[0]?.argument
          ? all_arguments[0].action[0].argument
          : "",
        argument_2: all_arguments[0]?.action[1]?.argument
          ? all_arguments[0].action[1].argument
          : "",
        argument_3: all_arguments[0]?.action[2]?.argument
          ? all_arguments[0].action[2].argument
          : "",
        counter_argument_1: counter_arguments[0]?.action[0]?.argument
          ? counter_arguments[0].action[0].argument
          : "",
        counter_argument_2: counter_arguments[0]?.action[1]?.argument
          ? counter_arguments[0].action[1].argument
          : "",
        counter_argument_3: counter_arguments[0]?.action[2]?.argument
          ? counter_arguments[0].action[2].argument
          : "",
        conclusion: conclusion[0] ? conclusion[0].action : "",
      };

      data.push(temp);
      return data;
    });
    setChallenge2(data);
  }, [dataUsers2]);

  return (
    <div className="mt-5">
      {mergeIntro ? (
        <ExcelFile
          element={
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Descargar Datos Antiguos
            </button>
          }
          filename="Datos App Pensar Antiguos"
        >
          {/* INTRODUCCION */}
          <ExcelSheet data={mergeIntro} name="Introducción">
            <ExcelColumn label="ID" value="idUser" />
            <ExcelColumn label="Estudiante" value="nameUser" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn
              label="Contexto"
              value={(cont) => JSON.stringify(cont.context)}
            />
            <ExcelColumn
              label="Action"
              value={(act) => JSON.stringify(act.action)}
            />
            <ExcelColumn
              label="Time"
              value={(time) => JSON.stringify(time.time)}
            />
          </ExcelSheet>
          {/* DESAFIO 1 */}
          <ExcelSheet data={mergeChallenge1} name="Desafío 1">
            <ExcelColumn label="ID" value="idUser" />
            <ExcelColumn label="Estudiante" value="nameUser" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn
              label="Contexto"
              value={(cont) => JSON.stringify(cont.context)}
            />
            <ExcelColumn
              label="Action"
              value={(act) => JSON.stringify(act.action)}
            />
            <ExcelColumn
              label="Time"
              value={(time) => JSON.stringify(time.time)}
            />
          </ExcelSheet>
          {/* DESAFIO 2 */}
          <ExcelSheet data={mergeChallenge2} name="Desafío 2">
            <ExcelColumn label="ID" value="idUser" />
            <ExcelColumn label="Estudiante" value="nameUser" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn
              label="Contexto"
              value={(cont) => JSON.stringify(cont.context)}
            />
            <ExcelColumn
              label="Action"
              value={(act) => JSON.stringify(act.action)}
            />
            <ExcelColumn
              label="Time"
              value={(time) => JSON.stringify(time.time)}
            />
          </ExcelSheet>
          {/* TRIVIA */}
          <ExcelSheet data={newTrivia} name="Trivia">
            <ExcelColumn label="ID" value="idUser" />
            <ExcelColumn label="Estudiante" value="nameUser" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn
              label="Contexto"
              value={(cont) => JSON.stringify(cont.context)}
            />
            <ExcelColumn
              label="Action"
              value={(act) => JSON.stringify(act.action)}
            />
            <ExcelColumn
              label="Time"
              value={(time) => JSON.stringify(time.time)}
            />
          </ExcelSheet>

          {/* INFORMACIÓN FILTRADA */}
          {/* DESAFIO 1 FILTRADO */}
          <ExcelSheet data={challenge1} name="Desafío 1 - Filtrado">
            <ExcelColumn label="ID" value="idUser" />
            <ExcelColumn label="Estudiante" value="name" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn label="Tesis" value="thesis" />
            <ExcelColumn label="Argumento 1" value="argument_1" />
            <ExcelColumn label="Argumento 2" value="argument_2" />
            <ExcelColumn label="Argumento 3" value="argument_3" />
            <ExcelColumn label="Argumento 4" value="argument_4" />
            <ExcelColumn label="Argumento 5" value="argument_5" />
            <ExcelColumn label="Argumento 6" value="argument_6" />
            <ExcelColumn label="Argumento 7" value="argument_7" />
            <ExcelColumn
              label="Contra-argumento 1"
              value="counter_argument_1"
            />
            <ExcelColumn
              label="Contra-argumento 2"
              value="counter_argument_2"
            />
            <ExcelColumn
              label="Contra-argumento 3"
              value="counter_argument_3"
            />
            <ExcelColumn
              label="Contra-argumento 4"
              value="counter_argument_4"
            />
            <ExcelColumn
              label="Contra-argumento 5"
              value="counter_argument_5"
            />
            <ExcelColumn
              label="Contra-argumento 6"
              value="counter_argument_6"
            />
            <ExcelColumn
              label="Contra-argumento 7"
              value="counter_argument_7"
            />
            <ExcelColumn label="Conclusión" value="conclusion" />
          </ExcelSheet>

          {/* DESAFIO 2 FILTRADO */}
          <ExcelSheet data={challenge2} name="Desafío 2 - Filtrado">
            <ExcelColumn label="ID" value="idUser" />
            <ExcelColumn label="Estudiante" value="name" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn label="Url 1" value="url_1" />
            <ExcelColumn label="Url 2" value="url_2" />
            <ExcelColumn label="Url 3" value="url_3" />
            <ExcelColumn label="Tesis" value="thesis" />
            <ExcelColumn label="Argumento 1" value="argument_1" />
            <ExcelColumn label="Argumento 2" value="argument_2" />
            <ExcelColumn label="Argumento 3" value="argument_3" />
            <ExcelColumn
              label="Contra-argumento 1"
              value="counter_argument_1"
            />
            <ExcelColumn
              label="Contra-argumento 2"
              value="counter_argument_2"
            />
            <ExcelColumn
              label="Contra-argumento 3"
              value="counter_argument_3"
            />
            <ExcelColumn label="Conclusión" value="conclusion" />
          </ExcelSheet>
        </ExcelFile>
      ) : null}
    </div>
  );
}
