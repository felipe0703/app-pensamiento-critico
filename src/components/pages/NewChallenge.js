import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FirebaseContext } from "../../firebase";
import { useNavigate } from "react-router-dom";
import FileUploader from "react-firebase-file-uploader";

const NewChallenge = () => {
  // state para las imagenes
  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(0);
  const [urlImage, setUrlImage] = useState("");
  //Context con las operaciones de firebase
  const { firebase } = useContext(FirebaseContext);

  //Hook para redireccionar
  const navigate = useNavigate();

  //validacion y leer los datos del formulario
  const formik = useFormik({
    initialValues: {
      nombre: "",
      descripcion: "",
      image: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "El nombre del desadío debe tener como mínimo 3 caracteres")
        .required("El nombre del desafío es obligatorio"),
      descripcion: Yup.string()
        .min(
          10,
          "La descripción del desadío debe tener como mínimo 10 caracteres"
        )
        .required("La descripción del desafío es obligatoria"),
    }),
    onSubmit: (challenge) => {
      try {
        challenge.available = true;
        challenge.image = urlImage;
        firebase.db.collection("challenges").add(challenge);
        //redireccionar
        navigate("/portada");
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
    console.log(error);
  };

  const handleUploadSuccess = async (name) => {
    setProgress(100);
    setUpload(false);

    //almacenar la url de destino
    const url = await firebase.storage
      .ref("challenges")
      .child(name)
      .getDownloadURL();
    console.log(url);
    setUrlImage(url);
  };

  const handleProgress = (pro) => {
    setProgress(pro);
    console.log(pro);
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-600 mb-4">Nuevo Desafío</h1>

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-3xl">
          <form onSubmit={formik.handleSubmit}>
            <div className="my-4">
              <p className="font-bold text-xl text-gray-700 text-center">
                Portada
              </p>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="nombre"
                type="text"
                placeholder="Nombre desafío"
                value={formik.values.nombre}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.nombre && formik.errors.nombre ? (
              <div
                className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.nombre}</p>
              </div>
            ) : null}

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Imagen del desafío
              </label>
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
                htmlFor="descripcion"
              >
                Descripción
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                id="descripcion"
                placeholder="Descripción desafío"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            {formik.touched.descripcion && formik.errors.descripcion ? (
              <div
                className="bg-red-100 border-l-4 border border-red-500 text-red-700 p-4 mb-5"
                role="alert"
              >
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.descripcion}</p>
              </div>
            ) : null}

            <div className="my-10">
              <p className="font-bold text-xl text-gray-700 text-center">
                Tesis
              </p>
            </div>

            <div className="mb-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="planteamiento"
              >
                Planteamiento
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                id="planteamiento"
                placeholder="Descripción el planteamiento de la tesis"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>

            <div className="mb-4 mt-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="descripcion"
              >
                Tesis 1
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                id="descripcion"
                placeholder="Descripción el planteamiento de la tesis"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>

            <div className="mb-4 mt-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="descripcion"
              >
                Tesis 2
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                id="descripcion"
                placeholder="Descripción el planteamiento de la tesis"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>

            <div className="my-10">
              <p className="font-bold text-xl text-gray-700 text-center">
                Argumentos Tesis 1
              </p>
            </div>

            <div className="mb-4 mt-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="argumento1_1"
              >
                Argumento a favor de la Tesis 1
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                id="argumento1_1"
                placeholder="Argumento a favor de la tesis 1"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            <div className="mb-4 mt-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="argumento1_1"
              >
                Argumento a favor de la Tesis 1
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                id="argumento1_1"
                placeholder="Argumento a favor de la tesis 1"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            <div className="mb-4 mt-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="argumento1_1"
              >
                Argumento a favor de la Tesis 1
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                id="argumento1_1"
                placeholder="Argumento a favor de la tesis 1"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            <div className="mb-4 mt-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="argumento1_1"
              >
                Argumento a favor de la Tesis 1
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                id="argumento1_1"
                placeholder="Argumento a favor de la tesis 1"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            <div className="my-10">
              <p className="font-bold text-xl text-gray-700 text-center">
                Argumentos Tesis 2
              </p>
            </div>
            <div className="mb-4 mt-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="argumento2_1"
              >
                Argumento a favor de la Tesis 2
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                id="argumento2_1"
                placeholder="Argumento a favor de la tesis 2"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            <div className="mb-4 mt-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="argumento2_1"
              >
                Argumento a favor de la Tesis 2
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                id="argumento2_1"
                placeholder="Argumento a favor de la tesis 2"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            <div className="mb-4 mt-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="argumento2_1"
              >
                Argumento a favor de la Tesis 2
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                id="argumento2_1"
                placeholder="Argumento a favor de la tesis 2"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            <div className="mb-4 mt-4 ">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="argumento2_1"
              >
                Argumento a favor de la Tesis 2
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                id="argumento2_1"
                placeholder="Argumento a favor de la tesis 2"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></textarea>
            </div>

            <input
              type="submit"
              className="bg-blue-600 rounded-md hover:bg-yellow-500 hover:text-gray-600 w-full mt-5 p-2 text-white uppercase font-bold"
              value="Agregar Desafío"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NewChallenge;
