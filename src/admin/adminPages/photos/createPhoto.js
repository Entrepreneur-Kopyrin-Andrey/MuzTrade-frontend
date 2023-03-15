// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Head from "next/head";

// export default function CreatePhoto() {
//   return (
//     <>
//       <Head>
//         <title> Создать картинку </title>
//       </Head>
//       <div className="createWrapper">
//         <h1>Создание картинки</h1>
//         <div className="createUp">
//           <div className="upload">
//             <Image src="/upload.svg" alt="search" width={120} height={120} />
//             <p> Выберите файл из проводника для загрузки</p>
//           </div>
//           <textarea
//             rows="10"
//             placeholder="Краткое описание"
//             className="summaryInput"
//           />
//         </div>
//         <div className="createBottom_ph">
//           <form className="titleContainer_ph">
//             <input
//               className="titleInput_ph"
//               type="text"
//               placeholder="Введите название"
//             />
//             <input className="dateInput_ph" type="date" />
//           </form>

//           <div className="bottomButtons_ph">
//             <button className="createAdminBtn_ph"> Создать </button>
//             <Link href="./news">
//               <button className="cancelAdminBtn_ph"> Отменить </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
