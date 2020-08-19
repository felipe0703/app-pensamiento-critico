import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FirebaseContext } from "../../firebase";
import { useNavigate } from "react-router-dom";
import FileUploader from "react-firebase-file-uploader";

const ChallengeScreenForm = ({ challenge }) => {
  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(0);
  const [urlImage, setUrlImage] = useState("");
  const {
    name,
    description,
    approach,
    thesis1,
    thesis2,
    id,
    image,
  } = challenge;

  const { firebase } = useContext(FirebaseContext);
  const navigate = useNavigate();

  const formatChallenge = (datos) => {
    return {
      order: 0,
      name: datos.name,
      image: urlImage ? urlImage : image ? image : "",
      description: datos.description,
      status: false,
      created: "",
      updated: "",
      approach: datos.approach,
      thesis1: {
        text: datos.thesis1,
        arguments: [
          datos.arguments1_1,
          datos.arguments1_2,
          datos.arguments1_3,
          datos.arguments1_4,
        ],
        conclusion: "",
      },
      thesis2: {
        text: datos.thesis2,
        arguments: [
          datos.arguments2_1,
          datos.arguments2_2,
          datos.arguments2_3,
          datos.arguments2_4,
        ],
        conclusion: "",
      },
    };
  };

  const formik = useFormik({
    initialValues: {
      name: name,
      description: description,
      image: "",
      approach: approach,
      thesis1: thesis1.text,
      thesis2: thesis2.text,
      arguments1_1: thesis1.arguments[0],
      arguments1_2: thesis1.arguments[1],
      arguments1_3: thesis1.arguments[2],
      arguments1_4: thesis1.arguments[3],
      arguments2_1: thesis2.arguments[0],
      arguments2_2: thesis2.arguments[1],
      arguments2_3: thesis2.arguments[2],
      arguments2_4: thesis2.arguments[3],
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "El nombre del desadío debe tener como mínimo 3 caracteres")
        .required("El nombre del desafío es obligatorio"),
      description: Yup.string()
        .min(
          10,
          "La descripción del desadío debe tener como mínimo 10 caracteres"
        )
        .required("La descripción del desafío es obligatoria"),
      approach: Yup.string()
        .min(
          10,
          "El planteamiento del desadío debe tener como mínimo 10 caracteres"
        )
        .required("El planteamiento del desafío es obligatorio"),
      thesis1: Yup.string()
        .min(10, "La tesis del desadío debe tener como mínimo 10 caracteres")
        .required("La tesis del desafío es obligatorio"),
      thesis2: Yup.string()
        .min(10, "La tesis del desadío debe tener como mínimo 10 caracteres")
        .required("La tesis del desafío es obligatorio"),
      arguments1_1: Yup.string()
        .min(
          10,
          "El argumento del desadío debe tener como mínimo 10 caracteres"
        )
        .required("El argumento del desafío es obligatorio"),
      arguments1_2: Yup.string()
        .min(
          10,
          "El argumento del desadío debe tener como mínimo 10 caracteres"
        )
        .required("El argumento del desafío es obligatorio"),
      arguments1_3: Yup.string()
        .min(
          10,
          "El argumento del desadío debe tener como mínimo 10 caracteres"
        )
        .required("El argumento del desafío es obligatorio"),
      arguments1_4: Yup.string()
        .min(
          10,
          "El argumento del desadío debe tener como mínimo 10 caracteres"
        )
        .required("El argumento del desafío es obligatorio"),
      arguments2_1: Yup.string()
        .min(
          10,
          "El argumento del desadío debe tener como mínimo 10 caracteres"
        )
        .required("El argumento del desafío es obligatorio"),
      arguments2_2: Yup.string()
        .min(
          10,
          "El argumento del desadío debe tener como mínimo 10 caracteres"
        )
        .required("El argumento del desafío es obligatorio"),
      arguments2_3: Yup.string()
        .min(
          10,
          "El argumento del desadío debe tener como mínimo 10 caracteres"
        )
        .required("El argumento del desafío es obligatorio"),
      arguments2_4: Yup.string()
        .min(
          10,
          "El argumento del desadío debe tener como mínimo 10 caracteres"
        )
        .required("El argumento del desafío es obligatorio"),
    }),
    onSubmit: (datos) => {
      try {
        const challengeUpdated = formatChallenge(datos);
        firebase.db.collection("challenges").doc(id).update(challengeUpdated);
        navigate("/desafios");
      } catch (error) {
        console.log(error);
      }
    },
  });

  //todo sobre las imagenes
  const handleUploadStart = () => {
    setProgress(0);
    setUpload(true);
  };

  const handleUploadError = (error) => {
    setUpload(false);
  };

  const handleUploadSuccess = async (name) => {
    setProgress(100);
    setUpload(false);

    //almacenar la url de destino
    const url = await firebase.storage
      .ref("challenges")
      .child(name)
      .getDownloadURL();
    setUrlImage(url);
  };

  const handleProgress = (pro) => {
    setProgress(pro);
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="my-4">
          <p className="font-bold text-xl text-gray-700 text-center">Portada</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Nombre desafío"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.name && formik.errors.name ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.name}</p>
          </div>
        ) : null}

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="image"
          >
            Imagen del desafío
          </label>
          {image && (
            <div className="max-w-sm rounded overflow-hidden shadow-lg mb-4 ">
              <img className="w-full" src={image} alt="Imagen del desafío" />
            </div>
          )}
          <FileUploader
            accept="image/*"
            id="image"
            name="image"
            randomizeFilename
            storageRef={firebase.storage.ref("challenges")}
            onUploadStart={handleUploadStart}
            onUploadError={handleUploadError}
            onUploadSuccess={handleUploadSuccess}
            onProgress={handleProgress}
          />
        </div>
        {upload && (
          <div className="h-12 relative w-full border">
            <div
              className="bg-green-500 absolute left-0 top-0 text-white px-2 text-sm h-12 flex items-center"
              style={{ width: `${progress}%` }}
            >
              {progress} %
            </div>
          </div>
        )}
        {urlImage && (
          <p className="bg-green-500 text-white p-3 text-center my-5">
            La imagen se subió correctamente
          </p>
        )}

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Descripción
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            id="description"
            placeholder="Descripción desafío"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        {formik.touched.description && formik.errors.description ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.description}</p>
          </div>
        ) : null}

        <div className="my-10">
          <p className="font-bold text-xl text-gray-700 text-center">Tesis</p>
        </div>

        <div className="mb-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="approach"
          >
            Planteamiento
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
            id="approach"
            placeholder="Descripción el planteamiento de la tesis"
            value={formik.values.approach}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        {formik.touched.approach && formik.errors.approach ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.approach}</p>
          </div>
        ) : null}

        <div className="mb-4 mt-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="thesis1"
          >
            Tesis 1
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            id="thesis1"
            placeholder="Descripción el planteamiento de la tesis"
            value={formik.values.thesis1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        {formik.touched.thesis1 && formik.errors.thesis1 ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.thesis1}</p>
          </div>
        ) : null}

        <div className="mb-4 mt-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="thesis2"
          >
            Tesis 2
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            id="thesis2"
            placeholder="Descripción el planteamiento de la tesis"
            value={formik.values.thesis2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>

        {formik.touched.thesis2 && formik.errors.thesis2 ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.thesis2}</p>
          </div>
        ) : null}

        <div className="my-10">
          <p className="font-bold text-xl text-gray-700 text-center">
            Argumentos Tesis 1
          </p>
        </div>

        <div className="mb-4 mt-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="arguments1_1"
          >
            Argumento a favor de la Tesis 1
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            id="arguments1_1"
            placeholder="Argumento a favor de la tesis 1"
            value={formik.values.arguments1_1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        {formik.touched.arguments1_1 && formik.errors.arguments1_1 ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.arguments1_1}</p>
          </div>
        ) : null}

        <div className="mb-4 mt-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="arguments1_2"
          >
            Argumento a favor de la Tesis 1
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            id="arguments1_2"
            placeholder="Argumento a favor de la tesis 1"
            value={formik.values.arguments1_2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>

        {formik.touched.arguments1_2 && formik.errors.arguments1_2 ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.arguments1_2}</p>
          </div>
        ) : null}

        <div className="mb-4 mt-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="arguments1_3"
          >
            Argumento a favor de la Tesis 1
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            id="arguments1_3"
            placeholder="Argumento a favor de la tesis 1"
            value={formik.values.arguments1_3}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        {formik.touched.arguments1_3 && formik.errors.arguments1_3 ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.arguments1_3}</p>
          </div>
        ) : null}

        <div className="mb-4 mt-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="arguments1_4"
          >
            Argumento a favor de la Tesis 1
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            id="arguments1_4"
            placeholder="Argumento a favor de la tesis 1"
            value={formik.values.arguments1_4}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        {formik.touched.arguments1_4 && formik.errors.arguments1_4 ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.arguments1_4}</p>
          </div>
        ) : null}

        <div className="my-10">
          <p className="font-bold text-xl text-gray-700 text-center">
            Argumentos Tesis 2
          </p>
        </div>
        <div className="mb-4 mt-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="arguments2_1"
          >
            Argumento a favor de la Tesis 2
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            id="arguments2_1"
            placeholder="Argumento a favor de la tesis 2"
            value={formik.values.arguments2_1}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>

        {formik.touched.arguments2_1 && formik.errors.arguments2_1 ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.arguments2_1}</p>
          </div>
        ) : null}
        <div className="mb-4 mt-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="arguments2_2"
          >
            Argumento a favor de la Tesis 2
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            id="arguments2_2"
            placeholder="Argumento a favor de la tesis 2"
            value={formik.values.arguments2_2}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        {formik.touched.arguments2_2 && formik.errors.arguments2_2 ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.arguments2_2}</p>
          </div>
        ) : null}
        <div className="mb-4 mt-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="arguments2_3"
          >
            Argumento a favor de la Tesis 2
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            id="arguments2_3"
            placeholder="Argumento a favor de la tesis 2"
            value={formik.values.arguments2_3}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        {formik.touched.arguments2_3 && formik.errors.arguments2_3 ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.arguments2_3}</p>
          </div>
        ) : null}
        <div className="mb-4 mt-4 ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="arguments2_4"
          >
            Argumento a favor de la Tesis 2
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            id="arguments2_4"
            placeholder="Argumento a favor de la tesis 2"
            value={formik.values.arguments2_4}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
        </div>
        {formik.touched.arguments2_4 && formik.errors.arguments2_4 ? (
          <div
            className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
            role="alert"
          >
            <p className="font-bold">Hubo un error:</p>
            <p>{formik.errors.arguments2_4}</p>
          </div>
        ) : null}

        <input
          type="submit"
          className="bg-blue-600 rounded-md hover:bg-yellow-500 hover:text-gray-600 w-full mt-5 p-2 text-white uppercase font-bold"
          value="Actualizar Desafío"
        />
      </form>
    </>
  );
};

export default ChallengeScreenForm;
