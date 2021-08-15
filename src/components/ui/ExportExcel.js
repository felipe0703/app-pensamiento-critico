import React, { useEffect, useState } from "react";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function ExportExcel({
  mergeIntro,
  mergeChallenge1,
  mergeChallenge2,
  mergeTrivia,
  mergeOther,
  users,
}) {
  const [dataUsers, setDataUsers] = useState([]);
  const [dataUsers2, setDataUsers2] = useState([]);
  const [challenge1, setChallenge1] = useState([]);
  const [challenge2, setChallenge2] = useState([]);

  // console.log(mergeTrivia);

  // SEPARO LOS DATOS DE LOS USUARIOS
  useEffect(() => {
    let data = [];
    let data2 = [];
    users.map((user) => {
      let temp = [];
      let temp2 = [];

      mergeChallenge1.map((chall) => {
        if (chall.email === user) {
          temp.push(chall);
        }
        return temp;
      });

      data.push(temp);

      mergeChallenge2.map((chall) => {
        if (chall.email === user) {
          temp2.push(chall);
        }
        return temp2;
      });
      data2.push(temp2);
      return data;
    });

    setDataUsers(data);
    setDataUsers2(data2);
  }, [users, mergeChallenge1, mergeChallenge2]);

  // SE FILTRA LA INFORMACIÓN POR COLUMNA
  // DESAFÍO 1
  useEffect(() => {
    let data = [];
    dataUsers.map((user) => {
      const thesis = user.filter((ele) => ele.challenge.context === "Tesis");
      const all_arguments = user.filter(
        (ele) => ele.challenge.context === "Argumentos"
      );
      const counter_arguments = user.filter(
        (ele) => ele.challenge.context === "Contra-argumentos"
      );
      const conclusion = user.filter(
        (ele) => ele.challenge.context === "Conclusión"
      );

      const temp = {
        idUser: user[0] ? user[0].idUser : "",
        name: user[0] ? user[0].name : "",
        gender: user[0] ? user[0].gender : "",
        email: user[0] ? user[0].email : "",
        career: user[0] ? user[0].career : "",

        thesis: thesis[0] ? thesis[0].challenge.action : "",
        argument_1: all_arguments[0]?.challenge.action[0]?.argument
          ? all_arguments[0].challenge.action[0].argument
          : "",
        argument_2: all_arguments[0]?.challenge.action[1]?.argument
          ? all_arguments[0].challenge.action[1].argument
          : "",
        argument_3: all_arguments[0]?.challenge.action[2]?.argument
          ? all_arguments[0].challenge.action[2].argument
          : "",
        argument_4: all_arguments[0]?.challenge.action[3]?.argument
          ? all_arguments[0].challenge.action[3].argument
          : "",
        argument_5: all_arguments[0]?.challenge.action[4]?.argument
          ? all_arguments[0].challenge.action[4].argument
          : "",
        argument_6: all_arguments[0]?.challenge.action[5]?.argument
          ? all_arguments[0].challenge.action[5].argument
          : "",
        argument_7: all_arguments[0]?.challenge.action[6]?.argument
          ? all_arguments[0].challenge.action[6].argument
          : "",
        counter_argument_1: counter_arguments[0]?.challenge.action[0]?.argument
          ? counter_arguments[0].challenge.action[0].argument
          : "",
        counter_argument_2: counter_arguments[0]?.challenge.action[1]?.argument
          ? counter_arguments[0].challenge.action[1].argument
          : "",
        counter_argument_3: counter_arguments[0]?.challenge.action[2]?.argument
          ? counter_arguments[0].challenge.action[2].argument
          : "",
        counter_argument_4: counter_arguments[0]?.challenge.action[3]?.argument
          ? counter_arguments[0].challenge.action[3].argument
          : "",
        counter_argument_5: counter_arguments[0]?.challenge.action[4]?.argument
          ? counter_arguments[0].challenge.action[4].argument
          : "",
        counter_argument_6: counter_arguments[0]?.challenge.action[5]?.argument
          ? counter_arguments[0].challenge.action[5].argument
          : "",
        counter_argument_7: counter_arguments[0]?.challenge.action[6]?.argument
          ? counter_arguments[0].challenge.action[6].argument
          : "",
        conclusion: conclusion[0] ? conclusion[0].challenge.action : "",
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
      const url = user.filter((ele) => ele.challenge.context === "Selección");
      const thesis = user.filter((ele) => ele.challenge.context === "Tesis");
      const all_arguments = user.filter(
        (ele) => ele.challenge.context === "Argumentos"
      );
      const counter_arguments = user.filter(
        (ele) => ele.challenge.context === "Contra-argumentos"
      );
      const conclusion = user.filter(
        (ele) => ele.challenge.context === "Conclusión"
      );

      const temp = {
        idUser: user[0] ? user[0].idUser : "",
        name: user[0] ? user[0].name : "",
        gender: user[0] ? user[0].gender : "",
        email: user[0] ? user[0].email : "",
        career: user[0] ? user[0].career : "",

        url_1: url[0]?.challenge.action[0]?.url
          ? url[0].challenge.action[0].url
          : "",
        url_2: url[0]?.challenge.action[1]?.url
          ? url[0].challenge.action[1].url
          : "",
        url_3: url[0]?.challenge.action[2]?.url
          ? url[0].challenge.action[2].url
          : "",

        thesis: thesis[0] ? thesis[0].challenge.action : "",
        argument_1: all_arguments[0]?.challenge.action[0]?.argument
          ? all_arguments[0].challenge.action[0].argument
          : "",
        argument_2: all_arguments[0]?.challenge.action[1]?.argument
          ? all_arguments[0].challenge.action[1].argument
          : "",
        argument_3: all_arguments[0]?.challenge.action[2]?.argument
          ? all_arguments[0].challenge.action[2].argument
          : "",
        counter_argument_1: counter_arguments[0]?.challenge.action[0]?.argument
          ? counter_arguments[0].challenge.action[0].argument
          : "",
        counter_argument_2: counter_arguments[0]?.challenge.action[1]?.argument
          ? counter_arguments[0].challenge.action[1].argument
          : "",
        counter_argument_3: counter_arguments[0]?.challenge.action[2]?.argument
          ? counter_arguments[0].challenge.action[2].argument
          : "",
        conclusion: conclusion[0] ? conclusion[0].challenge.action : "",
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
              Descargar Datos
            </button>
          }
          filename="Datos App Pensar"
        >
          {/* INTRODUCCION */}
          <ExcelSheet data={mergeIntro} name="Introducción">
            <ExcelColumn label="ID" value="idUser" />
            <ExcelColumn label="Estudiante" value="name" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn label="Género" value="gender" />
            <ExcelColumn label="Carrera" value="career" />
            <ExcelColumn
              label="Contexto"
              value={(cont) => JSON.stringify(cont.challenge.context)}
            />
            <ExcelColumn
              label="Action"
              value={(act) => JSON.stringify(act.challenge.action)}
            />
            <ExcelColumn
              label="Estado"
              value={(st) => JSON.stringify(st.challenge.state)}
            />
            <ExcelColumn
              label="Time"
              value={(time) => JSON.stringify(time.challenge.time)}
            />
          </ExcelSheet>
          {/* DESAFIO 1 */}
          <ExcelSheet data={mergeChallenge1} name="Desafío 1">
            <ExcelColumn label="ID" value="idUser" />
            <ExcelColumn label="Estudiante" value="name" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn label="Género" value="gender" />
            <ExcelColumn label="Carrera" value="career" />
            <ExcelColumn
              label="Contexto"
              value={(cont) => JSON.stringify(cont.challenge.context)}
            />
            <ExcelColumn
              label="Action"
              value={(act) => JSON.stringify(act.challenge.action)}
            />
            <ExcelColumn
              label="Estado"
              value={(st) => JSON.stringify(st.challenge.state)}
            />
            <ExcelColumn
              label="Time"
              value={(time) => JSON.stringify(time.challenge.time)}
            />
          </ExcelSheet>
          {/* DESAFIO 2 */}
          <ExcelSheet data={mergeChallenge2} name="Desafío 2">
            <ExcelColumn label="ID" value="idUser" />
            <ExcelColumn label="Estudiante" value="name" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn label="Género" value="gender" />
            <ExcelColumn label="Carrera" value="career" />
            <ExcelColumn
              label="Contexto"
              value={(cont) => JSON.stringify(cont.challenge.context)}
            />
            <ExcelColumn
              label="Action"
              value={(act) => JSON.stringify(act.challenge.action)}
            />
            <ExcelColumn
              label="Estado"
              value={(st) => JSON.stringify(st.challenge.state)}
            />
            <ExcelColumn
              label="Time"
              value={(time) => JSON.stringify(time.challenge.time)}
            />
          </ExcelSheet>
          {/* TRIVIA */}
          <ExcelSheet data={mergeTrivia} name="Trivia">
            <ExcelColumn label="ID" value="idUser" />
            <ExcelColumn label="Estudiante" value="name" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn label="Género" value="gender" />
            <ExcelColumn label="Carrera" value="career" />
            <ExcelColumn
              label="Contexto"
              value={(cont) => JSON.stringify(cont.challenge.context)}
            />
            <ExcelColumn
              label="Action"
              value={(act) => JSON.stringify(act.challenge.action)}
            />
            <ExcelColumn
              label="Estado"
              value={(st) => JSON.stringify(st.challenge.state)}
            />
            <ExcelColumn
              label="Time"
              value={(time) => JSON.stringify(time.challenge.time)}
            />
          </ExcelSheet>
          {/* OTROS */}
          <ExcelSheet data={mergeOther} name="Otros">
            <ExcelColumn label="ID" value="idUser" />
            <ExcelColumn label="Estudiante" value="name" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn label="Género" value="gender" />
            <ExcelColumn label="Carrera" value="career" />
            <ExcelColumn
              label="Contexto"
              value={(cont) => JSON.stringify(cont.challenge.context)}
            />
            <ExcelColumn
              label="Action"
              value={(act) => JSON.stringify(act.challenge.action)}
            />
            <ExcelColumn
              label="Estado"
              value={(st) => JSON.stringify(st.challenge.state)}
            />
            <ExcelColumn
              label="Time"
              value={(time) => JSON.stringify(time.challenge.time)}
            />
          </ExcelSheet>

          {/* INFORMACIÓN FILTRADA */}
          {/* DESAFIO 1 FILTRADO */}
          <ExcelSheet data={challenge1} name="Desafío 1 - Filtrado">
            <ExcelColumn label="ID" value="idUser" />
            <ExcelColumn label="Estudiante" value="name" />
            <ExcelColumn label="Email" value="email" />
            <ExcelColumn label="Género" value="gender" />
            <ExcelColumn label="Carrera" value="career" />
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
            <ExcelColumn label="Género" value="gender" />
            <ExcelColumn label="Carrera" value="career" />
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
