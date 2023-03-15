// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Head from "next/head";

// export default function EditNews() {
//   return (
//     <>
//       <Head>
//         <title> Редактировать новость </title>
//       </Head>
//       <div className="createWrapper">
//         <h1>Редактирование новости</h1>
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

//         <div className="createBottom">
//           <textarea
//             cols="60"
//             rows="10"
//             placeholder="Полное описание"
//             className="descriptionInput"
//           />

//           <form className="titleContainer">
//             <input
//               className="titleInput"
//               type="text"
//               placeholder="Введите название"
//             />
//             <input className="dateInput" type="date" />
//             <div className="bottomButtons">
//               <button className="createAdminBtn"> Сохранить </button>
//               <Link href="./news">
//                 <button className="cancelAdminBtn"> Отменить </button>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }
